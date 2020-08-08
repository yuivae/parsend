import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import CreateNew from "../pages/CreateNew";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/parsend" exact component={Homepage}></Route>
        <Route path="/create-new" exact component={CreateNew}></Route>
      </Switch>
    </BrowserRouter>
  );
}
