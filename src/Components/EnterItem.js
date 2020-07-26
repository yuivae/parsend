import React, { useState } from "react";

function EnterItem({ itemNo, totalCount, handleRemove }) {
  let itemKey = itemNo - 1;
  handleRemove(itemKey);
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
          <div className="remove-item" onClick={handleRemove}>
            <i className="fas fa-times"></i>
          </div>
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
