import axios from "axios";
import "dotenv/config";

const URL = "https://deploy-jornada-full-stack-frnw.onrender.com/api";

const responseArtists = await axios.get(URL + "/artists");
const responseSongs = await axios.get(URL + "/songs");

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;
