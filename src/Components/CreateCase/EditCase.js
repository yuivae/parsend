import React, { useState, useEffect, useRef } from "react";
import "./CreateCase.scss";
import { useLocation, useHistory } from "react-router-dom";
import EnterItem from "../EnterItem/EnterItem";

export default function EditCase() {
  const location = useLocation();
  const history = useHistory();
  let storage = JSON.parse(localStorage.getItem("caseObject"));
  let storedObject = JSON.parse(localStorage.getItem("caseObject")).find(
    (item) => item.caseID === location.state.caseID
  );
  console.log("stored object", storedObject);
  console.log("storedTitle", storedObject.caseItems[0].title);

  const [editObject, setEditObject] = useState(storedObject);
  const [itemList, setItemList] = useState(storedObject.caseItems);

  const [title, setTitle] = useState({});
  const [description, setDescription] = useState({});
  const [attached, setAttached] = useState({});

  //removeQuery will trigger useEffect and eventually handle removing selected items
  const [removeQuery, setRemoveQuery] = useState(null);

  //control is created to control on mount to rendering.
  const control = useRef(false);

  //UPDATE SECTION                                      ////////////////////////////////////

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
    const newList = itemList.map((item, index) => {
      if (index === attached.itemIndex) {
        //FILES API is not an existing array but it is a directory to the file. Here I create a new array of objects with needed props.
        const array = Array.from(attached.attached).map((item) => {
          return { name: item.name, size: item.size, type: item.type };
        });
        return { ...item, attachments: array };
      } else {
        return item;
      }
    });
    setItemList(newList);
  }, [attached]);

  //ADD SECTION                                      ////////////////////////////////////

  function addField() {
    setItemList([
      ...itemList,
      {
        title: "",
        description: "",
        attachments: [],
        completed: false,
      },
    ]);
    console.log("add handled");
  }

  //REMOVE SECTION                                      ////////////////////////////////////

  const removeHandler = (removeKey) => {
    setRemoveQuery(removeKey);
  };

  useEffect(() => {
    console.log("current Itemlist", itemList);
    //not possible to delete the first item
    if (itemList.length > 1) {
      setItemList(itemList.filter((item, index) => index !== removeQuery));
    }
    //to reset removekey at each click I nullify the value here
    setRemoveQuery(null);
  }, [removeQuery]);

  useEffect(() => console.log("itemlist", itemList), [itemList]);

  //SUBMIT SECTION                                      ////////////////////////////////////

  function submitHandler() {
    let total;
    if (itemList.length > 1) {
      total = itemList.reduce(
        (acc, val) => acc.attachments.length + val.attachments.length
      );
    } else {
      total = itemList[0].attachments.length;
    }
    control.current = true;
    setEditObject({ ...storedObject, caseItems: itemList, attachments: total });
  }

  useEffect(() => {
    if (control.current) {
      let newStorage = storage.map((item) => {
        if (item.caseID === editObject.caseID) {
          return editObject;
        } else {
          return item;
        }
      });
      localStorage.setItem("caseObject", JSON.stringify(newStorage));
      history.push({
        pathname: "/parsend",
      });
      console.log("newStorage", newStorage);
    }
  }, [editObject]);

  return (
    <div id="mobile">
      <div id="header" className="primary">
        <div id="title">
          <h1>Case ID {editObject.caseID}</h1>
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
            editValues={{
              description: item.description,
              title: item.title,
              attachments: item.attachments,
            }}
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
          Save Case
        </button>
      </div>
    </div>
  );
}
