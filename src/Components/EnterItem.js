import React, { useState, useRef } from "react";

function EnterItem({
  itemNo,
  totalCount,
  handleRemove,
  description,
  attachments,
}) {
  const descRef = useRef("");

  //define remove selection and remove
  let itemKey = itemNo - 1;
  function removeHandler() {
    handleRemove(itemKey);
  }
  function blurHandler() {
    description({
      desc: descRef.current.textContent,
      itemNo: itemNo,
    });
    console.log("blur", descRef.current.textContent);
  }
  return (
    <div className="item-content">
      <div className="item-container">
        <div className="add-section">
          <button className="add-button">
            <i className="fas fa-plus"></i>
          </button>
          <div className="add-text">
            <h2>Add file</h2>
            <p style={{ cursor: "pointer" }}>or select a folder</p>
          </div>
          <div className="item-counter">
            <h2>
              {itemNo}/{totalCount}
            </h2>
          </div>
          <div className="remove-item" onClick={removeHandler}>
            <i className="fas fa-times"></i>
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
