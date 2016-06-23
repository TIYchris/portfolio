import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

// layouts
import App from "layouts/app";

// components
import Data from "ui/data";

export default (
<Router history={ browserHistory }>
  <Route component={ App }> 
    <Route path="/" component={ Data } />
  </Route>
</Router>
)
