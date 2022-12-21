import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      // style={{ backgroundColor: "#212529" }}
      component="footer"
      sx={{
        py: 3,
        px: 2,
        align: "center",
        mt: "auto",
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "dark"
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
        backgroundColor: "#212529",
      }}
    >
      <Container
        maxWidth="sm"
        align="center"
        vertical="center"
        horizontal="center"
      >
        <Typography variant="body1" align="center" color="white">
          © 2022 TheAstroBaristas, Inc
        </Typography>
      </Container>
    </Box>
  );
}
