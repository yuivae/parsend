import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import EnterItem from "../EnterItem/EnterItem";
import "./CreateCase.css";

export default function CreateCase() {
  //setting a dynamic caseID state for later use this will be edited by input
  const [caseID, setCaseID] = useState("#1924");
  const [caseObject, setCaseObject] = useState({
    caseID: caseID,
    caseItems: [],
    created: false,
  });
  //useHistory hook needed to navigate onclick of a button and pass an object synchronously.
  let history = useHistory();
  //isMount is created to control the useEffect to render on mount.
  let isMount = useRef(false);
  const location = useLocation();

  const [description, setDescription] = useState({});
  const [title, setTitle] = useState({});
  //setting an itemList state for the items in the case
  const [itemList, setItemList] = useState([
    {
      title: "",
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
        title: "",
        description: "",
        attachments: 0,
        completed: false,
      },
    ]);
  }
  useEffect(() => {
    let newList = itemList.map((item, index) => {
      if (index === description.itemIndex) {
        return { ...item, description: description.desc };
      } else {
        return item;
      }
    });
    console.log("desc triggered", newList);
    setItemList(newList);
  }, [description]);
  useEffect(() => {
    let newList = itemList.map((item, index) => {
      if (index === title.itemIndex) {
        return { ...item, title: title.title };
      } else {
        return item;
      }
    });
    setItemList(newList);
  }, [title]);

  //removeHandler creates a removeKey and uses it to set removeQuery.

  const removeHandler = (removeKey) => {
    setRemoveQuery(removeKey);
  };
  const getDescription = (descObj) => {
    setDescription(descObj);
  };
  const getTitle = (titleObj) => {
    setTitle(titleObj);
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

  useEffect(() => {
    console.log("itemlist", itemList);
  }, [itemList]);
  function submitHandler() {
    setCaseObject({ ...caseObject, caseItems: itemList, created: true });
    isMount.current = true;
  }
  useEffect(() => {
    // console.log("you're in", caseObject);

    if (isMount.current) {
      history.push({
        pathname: "/parsend",
        state: { object: caseObject, location: location.pathname },
      });
    }
  }, [caseObject]);
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
            title={getTitle}
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
        <NavLink to={{ pathname: "/parsend" }}>return</NavLink>
        <button id="submit" onClick={submitHandler}>
          Create Case
        </button>
      </div>
    </div>
  );
}
