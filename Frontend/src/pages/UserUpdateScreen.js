import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import React from "react";

export default function UserUpdateScreen() {
  // const [value, setValue] = React.useState(null);
  return (
    <Box>
      <TextField id="filled-basic" label="First Name" variant="filled" />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      <TextField id="filled-basic" label="Phone" variant="filled" />
      <TextField id="filled-basic" label="Email" variant="filled" />
      <TextField id="filled-basic" label="Location" variant="filled" />
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
