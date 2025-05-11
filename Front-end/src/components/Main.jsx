import React from "react";
import ItemList from "./ItemList";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

function main({ type }) {
  return (
    <div className="main">
      {/* ItemList de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={8}
          itemsArray={artistsArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* ItemList de musicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Musicas"
          items={16}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default main;
