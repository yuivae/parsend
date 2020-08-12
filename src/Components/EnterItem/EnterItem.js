import React, { useState, useRef, useEffect } from "react";
import "./EnterItem.scss";

function EnterItem({
  title,
  itemIndex,
  totalCount,
  handleRemove,
  description,
  attachments,
}) {
  const descRef = useRef("");
  const titleRef = useRef("");
  const inputRef = useRef("");
  const [attached, setAttached] = useState([]);
  //porgressColor will define the complete/incomplete state of the item by color
  const [progressColor, setProgressColor] = useState("item-content");

  //define remove selection and remove
  function removeHandler() {
    handleRemove(itemIndex);
  }
  function blurHandler() {
    //onBlur; a.k.a when clicked outside the zone of description, the desc prop will be updated with the text input
    //later to be put in the case object upon submit.
    description({
      desc: descRef.current.textContent,
      itemIndex: itemIndex,
    });
    title({
      title: titleRef.current.textContent,
      itemIndex: itemIndex,
    });
  }
  function uploadHandler() {
    console.log("inputref value ", inputRef.current.key);
    const uploadFile = inputRef.current;
    if (uploadFile.files.length > 0) {
      //FileList is not an array, but it is iterable. We use spread op to get it as an array.
      setAttached([...uploadFile.files]);
      setProgressColor("item-content gray");
    }
  }
  function removeAttached(event) {
    // console.log("attachRef", attachRef.current.getAttribute("data-index"));
    console.log("event.target", event.target.id);
    if (attached.length > 1) {
      let newList = attached.filter((item, index) => index != event.target.id);
      // console.log("newlist", newList);
      setAttached(newList);
    } else {
      setAttached([]);
      setProgressColor("item-content");
    }
  }
  useEffect(() => {
    //here we assign the uploaded files into the attachments property, later to be put in the case object upon submit.
    attachments({ attached: attached.length, itemIndex: itemIndex });
  }, [attached]);
  return (
    <div className={progressColor}>
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
          <button type="button" className="add-button">
            <label htmlFor={itemIndex}>
              <i className="fas fa-plus"></i>
            </label>
          </button>
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
              <div ref={titleRef} onBlur={blurHandler} contentEditable></div>
              <h3 className="placeholder">Title</h3>
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
            id="description"
            onBlur={blurHandler}
            contentEditable
          ></div>
          <h3>Description</h3>
        </div>
      </div>
    </div>
  );
}

export default EnterItem;
