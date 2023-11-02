import React from "react";
import "./styles/app.css";
import Home from "./pages/home";
import Sidebar from "./pages/sidebar";

function App() {
  return (
    <div className="appContainer">
      <div className="sidebarCont">
        <Sidebar />
      </div>
      <div className="homeCont">
        <Home />
      </div>
    </div>
  );
}

export default App;
