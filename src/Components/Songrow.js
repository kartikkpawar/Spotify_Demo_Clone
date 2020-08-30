import React from "react";
import "../Css/songrow.css";

const Songrow = ({ trackz }) => {
  return (
    <div className="Songrow">
      <img className="songRowAlbum" src={track?.album?.images[0]?.url} alt="" />
      <div className="songRowinfo">
        <h1> {track.name} </h1>
        <p>
          {track?.artists?.map((artist) => artist.name).join(", ")}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
};

export default Songrow;
