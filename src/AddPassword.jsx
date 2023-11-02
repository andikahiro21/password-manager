import { useEffect, useState } from "react";
import "./styles/detailApp.css";
import AddPassword from "./pages/addpassword";
import Sidebar from "./pages/sidebar";

function AddPasswordApp() {
  return (
    <div className="detailAppContainer">
      <div className="sidebarCont">
        <Sidebar />
      </div>
      <div className="detailCont">
        <AddPassword />
      </div>
    </div>
  );
}

export default AddPasswordApp;
