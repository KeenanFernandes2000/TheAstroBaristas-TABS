import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Alert, Avatar, Button, Typography } from "@mui/material";

export default function UserUpdateScreen() {
  var [formState, setFormState] = useState("loading");

  var firstNameField;
  var lastNameField;
  var emailField;

  var formData = new FormData();
  // setFormState("loading");

  function sendDetails() {
    // 6. Send data backend

    formData.append("firstName", firstNameField.value);
    formData.append("lastName", lastNameField.value);
    formData.append("email", emailField.value);
    localStorage.setItem("firstName", firstNameField.value);
    localStorage.setItem("lastName", lastNameField.value);
    localStorage.setItem("email", emailField.value);

    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
      },
      body: formData,
    })
      .then(function (backendResponse) {
        // Convert the HTTP string response to JSON
        return backendResponse.json();
      })
      .then(
        // 7. If backend sends success, go to "success"
        function (jsonResponse) {
          if (jsonResponse.status === "ok") {
            console.log("backend response /users/update", jsonResponse);
            setFormState("success");
          }
        }
      )
      .catch(
        // 8. If backends sends error, go to "backend error"
        function (backendError) {
          console.log("backendError at /users/register", backendError);
          setFormState("backend error");
        }
      );
  }

  return (
    <Box className="container">
      <Typography className="mt-5 mb-5 ms-5" variant="h2">
        Update Details
      </Typography>
      <Avatar
        alt={localStorage.getItem("firstName")}
        src={localStorage.getItem("avatar")}
        sx={{ width: 150, height: 150, ml: "auto", mr: "auto" }}
      />
      <TextField
        className="container mt-5"
        id="filled-basic"
        label="First Name"
        variant="filled"
        inputRef={function (thisElement) {
          firstNameField = thisElement;
        }}
        defaultValue={localStorage.getItem("firstName")}
      />{" "}
      <br />
      <TextField
        id="filled-basic"
        className="container mt-3"
        inputRef={function (thisElement) {
          lastNameField = thisElement;
        }}
        defaultValue={localStorage.getItem("lastName")}
        label="Last Name"
        variant="filled"
      />{" "}
      <br />
      <TextField
        id="filled-basic"
        className="container mt-3"
        inputRef={function (thisElement) {
          emailField = thisElement;
        }}
        defaultValue={localStorage.getItem("email")}
        label="Email"
        variant="filled"
      />{" "}
      <br />
      <Button sx={{ mt: 2 }} onClick={sendDetails}>
        Send
      </Button>
      <br />
      <Box mt={2}>
        {formState === "success" && (
          <Alert severity="success">
            Your details have been updated successfully!
          </Alert>
        )}
      </Box>
    </Box>
  );
}
