import React from "react";
import "../Css/sidebarOption.css";

const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="SidebarOption">
      {Icon && <Icon className="SidebarOptionIcon" />}
      {Icon ? <h4>{text}</h4> : <p> {text} </p>}
    </div>
  );
};

export default SidebarOption;
