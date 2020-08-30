import React from "react";
import "../Css/player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="playerBody">
        <Sidebar />
        <Body spotify={spotify} />
        <Footer />
      </div>
    </div>
  );
};

export default Player;
