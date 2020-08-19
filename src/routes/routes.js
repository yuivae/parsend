import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import CreateCase from "../Components/CreateCase/CreateCase";
import EditCase from "../Components/CreateCase/EditCase";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/parsend" exact component={Home}></Route>
        <Route path="/create-new" exact component={CreateCase}></Route>
        <Route path="/edit-case" exact component={EditCase}></Route>
      </Switch>
    </BrowserRouter>
  );
}
