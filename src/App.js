import React, { useEffect } from "react";
import "./App.scss";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import history from "./services/history";
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
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
