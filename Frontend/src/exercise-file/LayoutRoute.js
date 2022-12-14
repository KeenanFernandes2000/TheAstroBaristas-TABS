import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";

function LayoutRoute(props) {
  console.log("Props:", props);
  return (
    <React.Fragment>
      <Header {...props} />
      {/*<Route path={props.path} exact={props.exact}component={props.component}*/}
      <Route {...props} />
    </React.Fragment>
  );
}

export default LayoutRoute;
