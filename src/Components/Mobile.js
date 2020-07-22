import React, { useState, useEffect, useRef } from "react";
import EnterItem from "./EnterItem";

function Mobile() {
  //setting a dynamic case state
  const [caseID, setCaseID] = useState("#1924");
  const [itemList, setItemList] = useState([0]);
  const itemRef = useRef();
  function addField() {
    //creates an array with item numbers. Problem: first click returns the same initial array
    setItemList([...itemList, itemList.length]);
    console.log(itemList);
  }
  function removeHandler() {
    //removes the selected component. Problem: can not identify the selected component
    setItemList(itemList.splice(itemList[itemRef], 1, 0));
    console.log(itemList);
  }

  return (
    <div id="mobile">
      <div id="header">
        <div id="title">
          <h1>Case ID {caseID}</h1>
        </div>
      </div>
      <div id="middle">
        {itemList.map((item, index) => (
          <EnterItem
            ref={itemRef}
            key={index}
            itemNo={index + 1}
            totalCount={itemList.length}
            handleRemove={removeHandler}
          />
        ))}
      </div>
      <div id="footer">
        <button id="add-field" onClick={addField}>
          Add Field
        </button>
        <button id="submit">Submit</button>
      </div>
    </div>
  );
}
export default Mobile;
