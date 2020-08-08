import React, { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div id="mobile">
      <div id="header">
        <div id="title">
          <h1>Case List</h1>
        </div>
      </div>
      <div id="middle"></div>
      <div id="footer">
        <NavLink to="/create-new">Create New</NavLink>
      </div>
    </div>
  );
}
