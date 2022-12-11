import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Hero() {
  return (
        <Box
          sx={{
            bgcolor: "#65647c",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              
            </Typography>
            <Typography variant="h5" align="center" color="#c7bca1" fontSize={58} paragraph>
            Everything you need for COFFEE and more
            </Typography>
            <Typography variant="h5" align="center" color="white" fontSize={35} paragraph>Get the best coffee beans, brewing equipment and more at the best price. </Typography>
            
            <Stack
              sx={{ pt: 10 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
        </Box>
      
  );
}

export default Hero;