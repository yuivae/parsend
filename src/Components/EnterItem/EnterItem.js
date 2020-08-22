import React, { useState, useRef, useEffect } from "react";
import "./EnterItem.scss";

function EnterItem({
  title,
  itemIndex,
  totalCount,
  handleRemove,
  description,
  attachments,
  editValues,
}) {
  //INITIAL SECTION                                      ////////////////////////////////////

  //References used to fetch input values
  const descRef = useRef("");
  const titleRef = useRef("");
  const inputRef = useRef("");

  //porgressColor will define the set/unset state of the items by color
  const [progressColor, setProgressColor] = useState("unset");

  //this component is present in multiple parents. These definitions are to separate the edit and create functionalities of this component.
  let editTitle = "";
  let editDescription = "";
  let editAttachments = [];
  if (editValues) {
    editTitle = editValues.title ? editValues.title : "";
    editDescription = editValues.description ? editValues.description : "";
    if (editValues.attachments) {
      editAttachments = editValues.attachments;
    }
  }

  const [attached, setAttached] = useState(editAttachments);
  //REMOVE SECTION                                      ////////////////////////////////////

  //define remove selection and remove
  function removeHandler() {
    handleRemove(itemIndex);
  }
  function removeAttached(event) {
    console.log("event.target", event.target.id);
    if (attached.length > 1) {
      let newList = attached.filter((item, index) => index != event.target.id);
      setAttached(newList);
    } else {
      setAttached([]);
      setProgressColor("unset");
    }
  }

  //UPDATE SECTION                                      ////////////////////////////////////

  //if there are attachments update class
  useEffect(() => {
    if (editAttachments.length > 0) {
      setProgressColor("set");
    } else {
      return;
    }
  }, [editAttachments]);

  function blurHandler(event) {
    //onBlur; a.k.a when clicked outside the zone of description, the desc prop will be updated with the text input
    //later to be put in the case object upon submit.
    if (event.target.id === "description-input") {
      description({
        desc: descRef.current.textContent,
        itemIndex: itemIndex,
      });
    } else if (event.target.id === "title-input") {
      title({
        title: titleRef.current.textContent,
        itemIndex: itemIndex,
      });
    }
  }

  function uploadHandler() {
    const uploadFile = inputRef.current;
    if (uploadFile.files.length > 0) {
      //FileList is not an array, but it is iterable. We use spread op to get it as an array.
      setAttached([...uploadFile.files]);
      setProgressColor("set");
    }
  }

  useEffect(() => {
    console.log("attached", attached);
    //here we assign the uploaded files into the attachments property, later to be put in the case object upon submit.
    attachments({ attached: attached, itemIndex: itemIndex });
  }, [attached]);

  return (
    <div className={`item-content ${progressColor}`}>
      <div className="item-container">
        {attached.map((file, index) => (
          <div data-index={index} key={index} className="attached">
            <div className="remove-name">
              <h3 key={index + 1}>{file.name}</h3>
              <div
                id="remove-attached"
                className="remove-item"
                onClick={removeAttached}
              >
                <h2 id={index}>remove</h2>
              </div>
            </div>
            <h4 key={index + 2}>
              {(file.size / 1000).toFixed(2)}mb - {file.type.split("/")[1]}
            </h4>
          </div>
        ))}
        <div className="add-section">
          <label htmlFor={itemIndex}>
            <div className="add-button">
              <i className="fas fa-plus"></i>
            </div>
          </label>

          <input
            ref={inputRef}
            id={itemIndex}
            className="upload-file"
            type="file"
            style={{ cursor: "pointer" }}
            multiple
            onChange={uploadHandler}
          />
          <div className="add-text">
            <div id="add-title">
              <div
                id="title-input"
                ref={titleRef}
                onBlur={blurHandler}
                contentEditable
                suppressContentEditableWarning={true}
              >
                {editTitle}
              </div>
              <h3 className={progressColor}>Title</h3>
            </div>
          </div>
          <div className="item-counter">
            <h2>
              •{itemIndex + 1}/{totalCount}
            </h2>
          </div>
          <div className="remove-item" onClick={removeHandler}>
            <h2 style={{ color: "#FD7422", fontSize: "14px" }}>remove</h2>
          </div>
        </div>

        <div className="description">
          <div
            ref={descRef}
            id="description-input"
            onBlur={blurHandler}
            contentEditable
            suppressContentEditableWarning={true}
          >
            {editDescription}
          </div>
          <h3 className={progressColor}>Description</h3>
        </div>
      </div>
    </div>
  );
}

export default EnterItem;
