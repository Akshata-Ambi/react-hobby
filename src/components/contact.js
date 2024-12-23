import React, { useContext } from "react";
import userContext from "../utils/userContext";

const ContactUs = () => {
  const {LoggedInUser} = useContext(userContext);
  return (
    <>
      <h1>Conatct Us @ aksh.ambi@gmail.com</h1>
      <p>{LoggedInUser}</p>
    </>
  );
};

export default ContactUs;
