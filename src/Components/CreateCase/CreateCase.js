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
    attachments: 0,
    created: false,
  });
  //useHistory hook needed to navigate onclick of a button and pass an object synchronously.
  let history = useHistory();
  //isMount is created to control the useEffect to render on mount.
  let isMount = useRef(false);
  const location = useLocation();

  const [description, setDescription] = useState({});
  const [title, setTitle] = useState({});
  const [attached, setAttached] = useState({});
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
  //GET DESCRIPTION from component and update state
  const getDescription = (descObj) => {
    setDescription(descObj);
  };
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

  //GET TITLE from component and update state

  const getTitle = (titleObj) => {
    setTitle(titleObj);
  };
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

  //GET ATTACHMENTS from component and update state

  const getAttached = (attached) => {
    setAttached(attached);
  };
  useEffect(() => {
    let newList = itemList.map((item, index) => {
      if (index === attached.itemIndex) {
        return { ...item, attachments: attached.attached };
      } else {
        return item;
      }
    });
    console.log("attached", newList);
    setItemList(newList);
  }, [attached]);

  //removeHandler creates a removeKey and uses it to set removeQuery.

  const removeHandler = (removeKey) => {
    setRemoveQuery(removeKey);
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
    let total = itemList.reduce((total, item) => total + item.attachments, 0);
    console.log("total", total);
    setCaseObject({
      ...caseObject,
      caseItems: itemList,
      created: true,
      attachments: total,
    });
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
            attachments={getAttached}
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
      <div id="footer" className="footer-create">
        <NavLink to={{ pathname: "/parsend" }}>return</NavLink>
        <button id="submit" onClick={submitHandler}>
          Create Case
        </button>
      </div>
    </div>
  );
}
