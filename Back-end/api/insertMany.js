import { artistsArray } from "../../Front-end/src/assets/database/artists.js";
import { songsArray } from "../../Front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistsArray.map((currentArtistsObj) => {
  const newArtistsObj = { ...currentArtistsObj };
  delete newArtistsObj.id;

  return newArtistsObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
  const newSongsObj = { ...currentSongsObj };
  delete newSongsObj.id;

  return newSongsObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistsArray);

console.log(responseSongs);
console.log(responseArtists);
