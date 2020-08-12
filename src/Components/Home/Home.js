import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

export default function Home(props) {
  // const location = useLocation();

  const [objectList, setObjectList] = useState({});
  console.log("props.location", props.location);
  // console.log("location.state", props.location.state);
  useEffect(() => {
    if (props.location.state) {
      setObjectList(props.location.state.object);
    }

    // let display = objectList.map((obj) => console.log("you're in"));
  }, []);
  useEffect(() => {
    console.log("objectList", objectList);
  }, [objectList]);

  // let display = Array.isArray(objectList.caseItems) ? objectList : [];
  // let display = [];
  return (
    <div id="mobile">
      <div id="header">
        <div id="title">
          <h1>Case List</h1>
        </div>
      </div>
      <div id="middle">
        <div key="index" className="list-item">
          <div className="item-container">
            <div id="item-icon">
              <i class="fas fa-pen"></i>
            </div>
            <div className="item-text">
              <h3>{objectList.caseID}</h3>
              <h4>Attachments: {objectList.attachments}</h4>
            </div>
            <h2>•1/1</h2>
          </div>
        </div>
      </div>
      <div id="footer" className="down footer-home">
        <NavLink to="/create-new">
          <div className="navbar-option">
            <i className="fas fa-folder-plus"></i>
          </div>
        </NavLink>
        <NavLink to="/parsend">
          <div className="navbar-option">
            <i className="fas fa-list"></i>
          </div>
        </NavLink>
        <NavLink to="/parsend">
          <div className="navbar-option">
            <i className="far fa-calendar-alt"></i>
          </div>
        </NavLink>
        <NavLink to="/parsend">
          <div className="navbar-option">
            <i className="fas fa-user"></i>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
