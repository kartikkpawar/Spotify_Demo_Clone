import React from "react";
import "../Css/sidebar.css";
import SidebarOption from "./SidebarOption";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebarLogo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption text="Home" Icon={HomeIcon} />
      <SidebarOption text="Search" Icon={SearchIcon} />
      <SidebarOption text="Your library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebarTitle">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption text={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
