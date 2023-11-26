import React from "react";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div className="navbarDiv">
        <img className="brandLogo" src={require("../images/Logo.png")} />
      <div className="navbar">
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>LeaderBoard</li>
          <li>Fees</li>
          <button>TRADE NOW</button>
        </ul>
      </div>
    </div>
  );
}
