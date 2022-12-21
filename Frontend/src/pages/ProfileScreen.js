import { useEffect, useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Link as ReactLink } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function ProfileScreen() {
  const [userDetails, setUserDetails] = useState();

  useEffect(function () {
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/findbyid`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
      },
    })
      .then(function (backendResponse) {
        return backendResponse.json();
      })
      .then(function (jsonResponse) {
        setUserDetails(jsonResponse);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  }, []);

  if (userDetails) {
    return (
      <ul>
        <li>Avatar: {userDetails.avatar}</li>
        <li>Firstname: {userDetails.firstName}</li>
        <li>Lastname: {userDetails.lastName}</li>
        <li>Email: {userDetails.email}</li>
        <Button
          component={ReactLink}
          to="/update"
          key="Update"
          sx={{ my: 2, display: "block" }}
        >
          Update Details
        </Button>
      </ul>
    );
  } else {
    return <p>Loading...</p>;
  }
}
