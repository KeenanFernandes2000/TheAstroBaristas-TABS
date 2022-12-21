import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#65647c",
        pt: 13,
        pb: 8,
        minHeight: "81vh",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          color="#c7bca1"
          paddingTop={10}
          // fontSize={50}
          paragraph
        >
          Everything you need for COFFEE and more
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="white"
          fontSize={26}
          paragraph
        >
          Get the best coffee beans, brewing equipment and more at the best
          price.
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
