import React from "react";
import AlbumImage from "./albumimage";
import AlbumInfo from "./albumdata";
import "./songcard.css"
export default function SongCard({album}) {

  return (
    <div className="songCard-body">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}
