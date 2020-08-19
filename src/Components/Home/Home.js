import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Home.scss";
// import "../../App.scss";

export default function Home() {
  const [objectList, setObjectList] = useState(() => {
    const storage = localStorage.getItem("caseObject");
    return storage ? JSON.parse(storage) : [];
  });
  const history = useHistory();

  let itemDisplay = [];
  if (objectList.length > 0) {
    itemDisplay = objectList.map((object, index) => (
      <div key={index} className="list-item">
        <div className="item-container">
          <div
            id="item-icon"
            onClick={() =>
              history.push({
                pathname: "/edit-case",
                state: objectList[index],
              })
            }
          >
            <i className="fas fa-pen"></i>
          </div>
          <div className="item-text">
            <h3>{object.caseID}</h3>
            <h4>
              {object.caseItems.length} Items, {object.caseItems.attachments}
              Attachments
            </h4>
            <h4>Date Created 14/02/2020</h4>
          </div>
          <h2>•1/1</h2>
        </div>
      </div>
    ));
  }

  return (
    <div id="mobile">
      <div id="header" className="primary">
        <div id="title">
          <h1>Case List</h1>
        </div>
      </div>
      <div id="middle">{itemDisplay}</div>
      <div id="footer" className="down footer-home">
        <div className="navbar-option">
          <NavLink to="/create-new">
            <i className="fas fa-folder-plus"></i>
            <h3>Create</h3>
          </NavLink>
        </div>
        <div className="navbar-option">
          <NavLink to="/parsend">
            <i className="fas fa-list"></i>
            <h3>Cases</h3>
          </NavLink>
        </div>
        <div className="navbar-option">
          <NavLink to="/parsend">
            <i className="fas fa-calendar-alt"></i>
            <h3>Calendar</h3>
          </NavLink>
        </div>
        <div className="navbar-option">
          <NavLink to="/parsend">
            <i className="fas fa-user"></i>
            <h3>Profile</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
