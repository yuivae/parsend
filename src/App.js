import React, { useEffect } from "react";
import MenuBar from "./Components/MenuBar";
import Mobile from "./Components/Mobile";
import "./App.css";

function App() {
  //add fontawesome cdn
  useEffect(() => {
    const style = document.createElement("link");
    style.rel = `stylesheet`;
    style.href = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css`;
    document.head.append(style);
  }, []);
  return (
    <div id="root">
      <MenuBar />
      <Mobile />
    </div>
  );
}

export default App;
