import React from "react";

function EnterItem() {
  return (
    <div className="item-content">
      <div className="item-container">
        <div className="add-section">
          <button className="add-button"></button>
          <div className="add-text">
            <h2>Add file</h2>
            <p>or select a folder</p>
          </div>
          <div className="item-counter"></div>
        </div>
        <div
          className="description"
          data-placeholder="Description"
          contentEditable
        ></div>
      </div>
    </div>
  );
}

export default EnterItem;
