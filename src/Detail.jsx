import React from "react";
import "./styles/detailApp.css";
import Detail from "./pages/detail";
import Sidebar from "./pages/sidebar";

function DetailApp() {
  return (
    <div className="detailAppContainer">
      <div className="sidebarCont">
        <Sidebar />
      </div>
      <div className="detailCont">
        <Detail />
      </div>
    </div>
  );
}

export default DetailApp;
