import React from "react";
import Box from "@mui/material/Box";
import { Redirect, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import { UserContext } from "./UserContext";

function GuestLayoutRoute(props) {
  const { loggedIn } = UserContext;

  if (loggedIn !== true) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ResponsiveAppBar {...props} />
        <Route
          path={props.path}
          exact={props.exact}
          component={props.component}
        />
        <Footer />
      </Box>
    );
  } else {
    return <Redirect to={"/"} />;
  }
}

export default GuestLayoutRoute;
