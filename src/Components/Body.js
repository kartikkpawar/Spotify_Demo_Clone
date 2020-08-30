import React from "react";
import "../Css/body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Songrow from "./Songrow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="bodyInfo">
        <img src={discover_weekly?.images[0].url} alt=" " />
        <div className="bodyInfoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p> {discover_weekly?.description} </p>
        </div>
      </div>
      <div className="bodySongs">
        <div className="bodyIcons">
          <PlayCircleFilledIcon className="bodyShuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <Songrow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
