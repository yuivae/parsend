import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import CaseHistory from "../pages/Case History";
import DocumentTypes from "../pages/DocumentTypes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/parsend" exact component={Homepage}></Route>
      <Route path="/case-history" exact component={CaseHistory}></Route>
      <Route path="/document-types" exact component={DocumentTypes}></Route>
    </Switch>
  );
}
