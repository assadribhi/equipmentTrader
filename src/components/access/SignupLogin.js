import React from "react";

// Styles
import { Description, Title, WebsiteImage } from "../../styles";
import Signup from "./Signup";
import SignIn from "./SignIn";

const SignupLogin = () => {
  return (
    <div>
      <div className="container">
        <Title>Heavy Equipment Trader</Title>
        <WebsiteImage
          src="https://previews.123rf.com/images/kovacevic/kovacevic1302/kovacevic130200009/17794615-under-construction-sign-with-helmet-and-heavy-machine.jpg"
          alt="Website Image"
        />
        <Description>
          Your Destination for all your Heavy Equipment needs.
        </Description>
        <div className="container">
          <Signup />
        </div>
        <div className="container">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
