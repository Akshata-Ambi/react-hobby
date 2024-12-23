import React from "react";
import User from "./User";
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name="Akshata Ambi(function)" location="Bangalore" />
      <UserClass name="Akshata Ambi(Class)" location="Hyderabad"/>
    </div>
  );
};

export default About;
