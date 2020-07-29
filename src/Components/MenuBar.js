import React from "react";

function MenuBar() {
  return (
    <div id="menu-bar">
      <div id="menu-header">
        <h1>Your Profile</h1>
      </div>
      <div id="menu-middle">
        <li>
          <a href="/parsend">
            <h2>New Case</h2>
          </a>
        </li>
        <li>
          <a href="/case-history">
            <h2>Your Cases</h2>
          </a>
        </li>
        <li>
          <a href="/document-types">
            <h2>Document Types</h2>
          </a>
        </li>
      </div>
      <div id="menu-footer">
        <li>
          <a href="#">
            <h2>Settings</h2>
          </a>
        </li>
      </div>
    </div>
  );
}

export default MenuBar;
