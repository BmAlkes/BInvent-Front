import React from "react";
import "./SideBar.scss";

const SiderBar = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <h2>SideBar</h2>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SiderBar;
