import { useEffect, useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function ProfileScreen() {
  const [userDetails, setUserDetails] = useState();

  useEffect(function () {
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`, {
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
        <li>Password</li>
      </ul>
    );
  } else {
    return <p>Loading...</p>;
  }
}
