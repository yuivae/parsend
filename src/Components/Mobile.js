import React, { useState } from "react";
import EnterItem from "./EnterItem";

function Mobile() {
  //setting a dynamic case state
  const [caseID, setCaseID] = useState("#1924");
  const [itemCount, setItemCount] = useState(1);
  const [itemList, setItemList] = useState([0]);
  function addField() {
    setItemList([...itemList, itemList.length]);
    console.log(itemList);
  }
  function removeHandler() {}
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
