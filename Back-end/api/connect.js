import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://ivnetoviesser:iSQpI6WhpPxfFLKN@cluster0.2s7f9ce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotfyCopia");
