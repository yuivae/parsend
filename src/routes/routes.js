import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import CaseHistory from "../pages/Case History";

export default function Routes() {
  return (
    <Switch>
      <Route path="/parsend" exact component={Homepage}></Route>
      <Route path="/case-history" exact component={CaseHistory}></Route>
    </Switch>
  );
}
