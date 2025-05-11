import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Só vou trabalhar com '/artists' e '/songs'");
});

app.get("/artists", async (req, res) => {
  try {
    const artists = await db.collection("artists").find({}).toArray();
    res.send(artists);
  } catch (err) {
    res.status(500).send("Erro ao buscar artistas");
  }
});

app.get("/songs", async (req, res) => {
  try {
    const songs = await db.collection("songs").find({}).toArray();
    res.send(songs);
  } catch (err) {
    res.status(500).send("Erro ao buscar músicas");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
