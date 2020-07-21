import React from "react";

function EnterItem({ itemNo, totalCount, handleRemove }) {
  return (
    <div className="item-content">
      <div className="item-container">
        <div className="add-section">
          <button className="add-button"></button>
          <div className="add-text">
            <h2>Add file</h2>
            <p style={{ cursor: "pointer" }}>or select a folder</p>
          </div>
          <div className="item-counter">
            {itemNo}/{totalCount}
          </div>
          <div className="remove-item" onClick={handleRemove}></div>
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
