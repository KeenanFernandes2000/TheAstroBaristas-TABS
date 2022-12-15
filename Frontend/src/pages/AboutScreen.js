import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function AboutScreen() {
  return (
    <div>
      <Box
        className="container"
        sx={{
          bgcolor: "#65647c",
          minHeight: "82vh",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          color="#c7bca1"
          fontSize={40}
          paragraph
        >
          We promise that we will serve the best quality coffee from the world's
          finest coffee beans. And just like our coffee, our story is unique.
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="#c7bca1"
          fontSize={40}
          paragraph
        >
          This beautiful coffee story was started by 3 friends who have all
          connected on one single emotion, and that emotion is coffee, our name
          the Astro baristas also has a meaning to it where the word baristas is
          inspired from our love for and to deliver coffee and the word Astro
          comes from a class we all met in and that is where the bean of Astro
          baristas was planted, and from then on we were committed to crafting
          the finest quality coffee,and stay tuned in the future for our
          signature blends and coffee beans from parts of the world of your
          choice.
        </Typography>
      </Box>
    </div>
  );
}

export default AboutScreen;
