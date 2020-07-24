import React, { useState, useEffect, useRef } from "react";
import EnterItem from "./EnterItem";

function Mobile() {
  //setting a dynamic caseID state for later use this will be edited by input
  const [caseID, setCaseID] = useState("#1924");

  //setting an itemList state for the items in the case
  const [itemList, setItemList] = useState([
    {
      itemNo: 1,
    },
  ]);
  //removeQuery will trigger useEffect and eventually handle removing selected items
  const [removeQuery, setRemoveQuery] = useState();

  function addField() {
    setItemList([
      ...itemList,
      {
        itemNo: itemList[itemList.length - 1].itemNo + 1,
      },
    ]);
    //__PROBLEM__: my console log currently opting the existing initial item. itemList.length is 1 after the click, it should be two ??
    console.log(
      "itemNos ",
      itemList.map((item) => item.itemNo)
    );
    console.log("itemList ", itemList);
  }

  //removeHandler creates a removeKey and uses it to set removeQuery.

  //__PROBLEM__: console.log in removeHandler gets triggered onclick of addField(), which shouldn't be the case. It should be triggered onClick of remove button ??
  const removeHandler = (removeKey) => {
    setRemoveQuery(removeKey);
    console.log("removequery", removeQuery);
  };

  //__PROBLEM__: useEffect won't get triggered by removeQuery ??
  useEffect(() => {
    //setItemList uses removeQuery to remove the selected item from the array of itemList
    setItemList(itemList.splice(removeQuery, 1));
    console.log("useEffect");
  }, removeQuery);

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
