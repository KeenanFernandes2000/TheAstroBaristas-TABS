import React from "react";
import { BrowserRouter, Switch /*,Route*/ } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import LayoutRoute from "./LayoutRoute";
import RegisterScreen from "./RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/about" exact={true} component={AboutScreen} />
        <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
        <LayoutRoute path="/register" exact={true} component={RegisterScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
