import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/", (req, res) => {
  res.send("Só vou trabalhar com '/artists' e '/songs'");
});

app.get("/api/artists", async (req, res) => {
  try {
    const artists = await db.collection("artists").find({}).toArray();
    res.send(artists);
  } catch (err) {
    res.status(500).send("Erro ao buscar artistas");
  }
});

app.get("/api/songs", async (req, res) => {
  try {
    const songs = await db.collection("songs").find({}).toArray();
    res.send(songs);
  } catch (err) {
    res.status(500).send("Erro ao buscar músicas");
  }
});

app.use(express.static(path.join(__dirname, "../Front-end/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
