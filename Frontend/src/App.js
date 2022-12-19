import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
// import ContactScreen from "./pages/ContactScreen";
import RegistrationScreen from "./pages/RegistrationScreen";
import LoginScreen from "./pages/LoginScreen";
import ProductScreen from "./pages/ProductScreen";
import LayoutRoute from "./LayoutRoute";
import GuestLayoutRoute from "./GuestLayoutRoute";
import PrivateLayoutRoute from "./PrivateLayoutRoute";
import ProfileScreen from "./pages/ProfileScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/about" exact={true} component={AboutScreen} />
        <LayoutRoute path="/products" exact={true} component={ProductScreen} />
        {/* <LayoutRoute path="/contact" exact={true} component={ContactScreen} /> */}
        <PrivateLayoutRoute
          path="/profile"
          exact={true}
          component={ProfileScreen}
        />
        <GuestLayoutRoute
          path="/register"
          exact={true}
          component={RegistrationScreen}
        />
        <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
