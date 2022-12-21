import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import baristaOne from "../images/barista1.jpg";
import baristaTwo from "../images/barista2.png";
import baristaThree from "../images/barista3.jpg";

function AboutScreen() {
  return (
    <div
      style={{
        backgroundColor: "#65647c",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        color="#c7bca1"
        paddingTop={15}
        // paddingX={20}
        // fontSize={25}
      >
        ABOUT US
      </Typography>
      <Box>
        <div classname="container">
          <Typography
            variant="h5"
            align="center"
            color="#c7bca1"
            paddingTop={5}
            paddingX={20}
            fontSize={22}
            paragraph
          >
            We promise that we will serve the best quality coffee from the
            world's finest coffee beans. And just like our coffee, our story is
            unique.
            <br />
            <br />
            This beautiful coffee story was started by 3 friends who have all
            connected on one single emotion, and that emotion is coffee, our
            name the Astro baristas also has a meaning to it where the word
            baristas is inspired from our love for and to deliver coffee.
            <br />
            <br />
            The word Astro comes from a className we all met in and that is
            where the bean of Astro baristas was planted, and from then on we
            were committed to crafting the finest quality coffee,and stay tuned
            in the future for our signature blends and coffee beans from parts
            of the world of your choice.
          </Typography>
        </div>
      </Box>
      <Box>
        <Typography
          variant="h4"
          align="center"
          color="#c7bca1"
          paddingTop={15}
          // paddingX={20}
          // fontSize={25}
        >
          OUR FOUNDERS
        </Typography>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 mx-2">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1 align-items-center">
                <h3 className="pt-10 mt-10 mb-8 display-6 lh-1 fw-bold">
                  Keenan
                </h3>
                <ul className="d-flex flex-column align-items-center list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={baristaOne}
                      alt="Bootstrap"
                      width="100"
                      height="100"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="align-items-center">
                    <small>Coffee Lover</small>
                  </li>
                  <li className="align-items-center">
                    <small>22 yrs</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 align-items-center">
                <h3 className="pt-10 mt-10 pt-8 mb-8 display-6 lh-1 fw-bold">
                  Krishna
                </h3>
                <ul className="d-flex flex-column align-items-center list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={baristaTwo}
                      alt="Bootstrap"
                      width="100"
                      height="100"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    {/* <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg> */}
                    <small>Coffee Lover</small>
                  </li>
                  <li className="d-flex align-items-center">
                    {/* <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg> */}
                    <small>22 yrs</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1 align-items-center">
                <h3 className="pt-10 mt-10 mb-8 display-6 lh-1 fw-bold">Jay</h3>
                <ul className="d-flex flex-column align-items-center list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={baristaThree}
                      alt="Bootstrap"
                      width="100"
                      height="100"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    {/* <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#geo-fill"></use>
                    </svg> */}
                    <small>Coffee Lover</small>
                  </li>
                  <li className="d-flex align-items-center">
                    {/* <svg className="bi me-2" width="1em" height="1em">
                      <use xlink:href="#calendar3"></use>
                    </svg> */}
                    <small>20 yrs</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default AboutScreen;
