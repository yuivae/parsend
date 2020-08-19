import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import EnterItem from "../EnterItem/EnterItem";
import "./CreateCase.scss";

export default function CreateCase() {
  //setting a dynamic caseID state for later use this will be edited by input
  const [caseID, setCaseID] = useState("1924");
  const [caseObject, setCaseObject] = useState();
  //useHistory hook needed to navigate onclick of a button and pass an object synchronously.
  let history = useHistory();
  //storage is to upload every new caseObject to localStorage
  let storage = localStorage.getItem("caseObject")
    ? JSON.parse(localStorage.getItem("caseObject"))
    : [];
  //control is created to control on mount to rendering.
  const control = useRef(false);

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
    control.current = true;
    setCaseObject({
      caseID: caseID,
      caseItems: itemList,
      created: true,
      attachments: total,
    });
  }
  useEffect(() => {
    if (control.current) {
      storage = [...storage, caseObject];
      localStorage.setItem("caseObject", JSON.stringify(storage));
      history.push({
        pathname: "/parsend",
      });
    }
  }, [caseObject]);
  return (
    <div id="mobile">
      <div id="header" className="primary">
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
        <button className="button secondary" onClick={() => history.goBack()}>
          Return
        </button>
        <button className="button primary" onClick={submitHandler}>
          Create Case
        </button>
      </div>
    </div>
  );
}
