import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "../Css/footer.css";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

const Footer = () => {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="footer">
      <div className="footerLeft">
        <img className="footerAlbumLogo" src="" alt="" />
        <div className="footerSongInfo">
          <h4>Yeahhh..!!!</h4>
        </div>
      </div>
      <div className="footerCenter">
        <ShuffleIcon className="footerGreen" />
        <SkipPreviousIcon className="footerIcon" />
        <PlayCircleOutlineIcon fontSize="large" />
        <SkipNextIcon className="footerIcon" />
        <RepeatIcon className="footerGreen" />
      </div>
      <div className="footerRight">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footerIcon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footerIcon" />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="continuous-slider"
              className="footerSliderGreen"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
