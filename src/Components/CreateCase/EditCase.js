import React, { useState, useEffect } from "react";
import "./CreateCase.scss";
import { useLocation, useHistory } from "react-router-dom";
import EnterItem from "../EnterItem/EnterItem";

export default function EditCase() {
  const location = useLocation();
  const history = useHistory();

  const [object, setObject] = useState(location.state);
  const [itemList, setItemList] = useState(object.caseItems);

  const [title, setTitle] = useState({});
  const [description, setDescription] = useState({});
  const [attached, setAttached] = useState({});

  console.log("location", location);
  console.log("object", object);

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

  function submitHandler() {
    console.log("submit handled");
  }

  function addField() {
    console.log("add handled");
  }
  function removeHandler() {
    console.log("remove handled");
  }
  return (
    <div id="mobile">
      <div id="header" className="primary">
        <div id="title">
          <h1>Case ID {object.caseID}</h1>
        </div>
      </div>
      <div id="middle">
        {object.caseItems.map((item, index) => (
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
