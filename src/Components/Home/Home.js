import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  // const location = useLocation();

  const [objectList, setObjectList] = useState([]);
  console.log("props.location", props.location);
  // console.log("location.state", props.location.state);
  useEffect(() => {
    // console.log("you're out; ", props.location.state.object.created);
    if (props.location.state) {
      // console.log("you're in");
      setObjectList(props.location.state.object.caseItems);
    }

    // let display = objectList.map((obj) => console.log("you're in"));
  }, []);
  useEffect(() => {
    // console.log("objectList", objectList);
    if (Array.isArray(objectList)) {
      console.log("you're in", objectList);
    }
  }, [objectList]);
  return (
    <div id="mobile">
      <div id="header">
        <div id="title">
          <h1>Case List</h1>
        </div>
      </div>
      <div id="middle">
        {objectList.map((object) => (
          <div>Let's go dancing</div>
        ))}
      </div>
      <div id="footer" className="down">
        <NavLink to="/create-new">Create New</NavLink>
      </div>
    </div>
  );
}
