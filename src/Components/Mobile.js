import React, { useState, useEffect } from "react";
import EnterItem from "./EnterItem";

function Mobile() {
  //setting a dynamic caseID state for later use this will be edited by input
  const [caseID, setCaseID] = useState("#1924");

  //setting an itemList state for the items in the case, using an arrow function so the initial state gets to be set only onLoad
  const [itemList, setItemList] = useState([
    {
      itemNo: 1,
    },
  ]);
  //removeQuery will trigger useEffect and eventually handle removing selected items
  const [removeQuery, setRemoveQuery] = useState(null);

  function addField() {
    setItemList([
      ...itemList,
      {
        itemNo: itemList[itemList.length - 1].itemNo + 1,
      },
    ]);
  }
  useEffect(() => console.log("itemList: ", itemList), [itemList]);

  //removeHandler creates a removeKey and uses it to set removeQuery.

  const removeHandler = (removeKey) => {
    setRemoveQuery(removeKey);
  };

  useEffect(() => {
    //not possible to delete the first item
    if (itemList.length > 1) {
      setItemList(itemList.filter((item, index) => index !== removeQuery));
    }
  }, [removeQuery]);

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
