import React, { useState, useEffect } from "react";
import EnterItem from "../EnterItem/EnterItem";
import "./CreateCase.css";

export default function CreateCase() {
  //setting a dynamic caseID state for later use this will be edited by input
  const [caseID, setCaseID] = useState("#1924");
  const [caseObject, setCaseObject] = useState({
    caseID: caseID,
    caseItems: [],
  });

  const [description, setDescription] = useState({});
  //setting an itemList state for the items in the case
  const [itemList, setItemList] = useState([
    {
      itemNo: 1,
      description: "",
      attachments: 0,
      completed: false,
    },
  ]);
  //removeQuery will trigger useEffect and eventually handle removing selected items
  const [removeQuery, setRemoveQuery] = useState(null);

  function addField() {
    setItemList([
      ...itemList,
      {
        description: "",
        attachments: 0,
        completed: false,
      },
    ]);
  }
  useEffect(() => {
    let newList = itemList.map((item) => {
      if (item.index === description.index) {
        return { ...item, description: description.desc };
      } else {
        return item;
      }
    });
    setItemList(newList);
  }, [description]);

  //removeHandler creates a removeKey and uses it to set removeQuery.

  const removeHandler = (removeKey) => {
    console.log("removekey", removeKey);
    setRemoveQuery(removeKey);
  };
  const getDescription = (descObj) => {
    setDescription(descObj);
  };

  useEffect(() => {
    console.log("current Itemlist", itemList);
    //not possible to delete the first item
    if (itemList.length > 1) {
      setItemList(itemList.filter((item, index) => index !== removeQuery));
    }
    //to keep removekey reset at each click I nullify the value here
    setRemoveQuery(null);
  }, [removeQuery]);
  useEffect(() => console.log("newItemList", itemList), [itemList]);
  function submitHandler() {
    setCaseObject({ ...caseObject, caseItems: itemList });
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
            itemIndex={index}
            description={getDescription}
            attachments={item.Attachments}
            totalCount={itemList.length}
            handleRemove={removeHandler}
            key={index}
          />
        ))}
      </div>
      <div id="add-section">
        <button id="add-field" onClick={addField}>
          Add Field
        </button>
      </div>
      <div id="footer">
        <button id="submit" onClick={submitHandler}>
          Create Case
        </button>
      </div>
    </div>
  );
}
