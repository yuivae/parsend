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
  const [removeQuery, setRemoveQuery] = useState();

  function addField() {
    //how to set the current itemList based on the values of the previous itemlist ?
    setItemList([
      ...itemList,
      {
        itemNo: itemList.itemNo + 1,
      },
    ]);
    //my console log currently opting the existing initial item. And it returns the itemNo as NaN.
    //this means that the structure of setItemList above, is wrong; I'm not successfuly getting the previous state property.
    console.log(itemList.map((item) => item.itemNo));
  }

  //removeHandler creates a removeKey and uses it to set removeQuery.
  //console.log in removeHandler gets triggered onclick of addField(), which shouldn't be the case. It should be triggered onClick of remove button
  const removeHandler = (removeKey) => {
    setRemoveQuery(removeKey);
    console.log("removequery but why?", removeQuery);
  };

  //useEffect won't get triggered by removequery
  useEffect(() => {
    //setItemList uses removeQuery to remove the selected item from the array of itemList
    setItemList(itemList.splice(removeQuery, 1));
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
