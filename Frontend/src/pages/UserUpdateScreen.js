import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function UserUpdateScreen() {
  // const [value, setValue] = React.useState(null);
  var [formState, setFormState] = useState(null);

  var firstNameField;
  var lastNameField;
  var emailField;
  var locationField;
  var phoneField;

  var formData = new FormData();

  setFormState("loading");

  // 6. Send data backend
  formData.append("firstName", firstNameField.value);
  formData.append("lastName", lastNameField.value);
  formData.append("email", emailField.value);
  formData.append("phone", phoneField.value);
  formData.append("location", locationField.value);

  fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/update`, {
    method: "POST",
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

  return (
    <Box>
      <TextField
        id="filled-basic"
        label="First Name"
        variant="filled"
        inputRef={function (thisElement) {
          firstNameField = thisElement;
        }}
      />
      <TextField
        id="filled-basic"
        inputRef={function (thisElement) {
          lastNameField = thisElement;
        }}
        label="Last Name"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        inputRef={function (thisElement) {
          phoneField = thisElement;
        }}
        label="Phone"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        inputRef={function (thisElement) {
          emailField = thisElement;
        }}
        label="Email"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        inputRef={function (thisElement) {
          locationField = thisElement;
        }}
        label="Location"
        variant="filled"
      />
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date Of Birth"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>*/}
    </Box>
  );
}
