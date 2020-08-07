import React, { useState, useRef, useEffect } from "react";
import "./EnterItem.css";

function EnterItem({
  itemNo,
  totalCount,
  handleRemove,
  description,
  attachments,
}) {
  const descRef = useRef("");

  const [attached, setAttached] = useState([]);
  //porgressColor will define the complete/incomplete state of the item by color
  const [progressColor, setProgressColor] = useState("item-content");

  //define remove selection and remove
  let itemKey = itemNo - 1;
  function removeHandler() {
    handleRemove(itemKey);
  }
  function blurHandler() {
    //onBlur; a.k.a when clicked outside the zone of description, the desc prop will be updated with the text input
    //later to be put in the case object upon submit.
    description({
      desc: descRef.current.textContent,
      itemNo: itemNo,
    });
    console.log("blur", descRef.current.textContent);
  }
  function uploadHandler() {
    const uploadFile = document.getElementById("upload-file");
    if (uploadFile.files.length > 0) {
      //FileList is not an array, but it is iterable. We use spread op to get it as an array.
      setAttached([...uploadFile.files]);
      setProgressColor("item-content gray");
    }
    console.log(uploadFile.files);
  }
  useEffect(() => {
    //here we assign the uploaded files into the attachments property, later to be put in the case object upon submit.
    attachments = [...attached];
    console.log("attachments", attachments);
  }, [attached]);
  return (
    <div className={progressColor}>
      <div className="item-container">
        {attached.map((file, index) => (
          <div className="attached">
            <h3 key={index}>{file.name}</h3>
            <h4 key={index}>
              {file.size}-{file.type}
            </h4>
          </div>
        ))}
        <div className="add-section">
          <button className="add-button">
            <i class="fas fa-plus"></i>
          </button>
          <div className="add-text">
            <input
              id="upload-file"
              type="file"
              name="upload-file"
              style={{ cursor: "pointer" }}
              multiple
              onChange={uploadHandler}
            />
            <div
              id="add-title"
              data-placeholder="Add Title"
              contentEditable
            ></div>
            <label htmlFor="upload-file">
              <p>Add file</p>
            </label>
          </div>
          <div className="item-counter">
            <h2>
              •{itemNo}/{totalCount}
            </h2>
          </div>
          <div className="remove-item" onClick={removeHandler}>
            <h2 style={{ color: "#FD7422", fontSize: "14px" }}>remove</h2>
          </div>
        </div>

        <div
          ref={descRef}
          className="description"
          data-placeholder="Description"
          onBlur={blurHandler}
          contentEditable
        ></div>
      </div>
    </div>
  );
}

export default EnterItem;
