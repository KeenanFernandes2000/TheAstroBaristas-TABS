import React from "react";
import { Route } from "react-router-dom"; //import with curly braces for items that are not default
import ResponsiveAppBar from "./exercise-file/ResponsiveAppBar";
import Footer from "./Footer";
import Box from "@mui/material/Box";

function LayoutRoute(props) {
  console.log("Props:", props);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ResponsiveAppBar {...props} />
      <Route {...props} />
      <Footer {...props} />
    </Box>
  );
}

export default LayoutRoute;
