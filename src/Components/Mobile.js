import React, { useState, useEffect } from "react";
import EnterItem from "./EnterItem";

function Mobile() {
  //setting a dynamic case state
  const [caseID, setCaseID] = useState("#1924");
  return (
    <div id="mobile">
      <div id="header">
        <div id="title">
          <h1>Case ID {caseID}</h1>
        </div>
      </div>
      <div id="middle">
        <EnterItem />
      </div>
      <div id="footer">
        <div id="submit-section"></div>
      </div>
    </div>
  );
}
export default Mobile;
