import React from "react";

// Styles
import { Description, Title, YardImage } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Heavy Equipment Trader</Title>
      <YardImage
        src="https://previews.123rf.com/images/kovacevic/kovacevic1302/kovacevic130200009/17794615-under-construction-sign-with-helmet-and-heavy-machine.jpg"
        alt="Shop Logo"
      />
      <Description>
        Your Destination for all your Heavy Equipment needs.
      </Description>
    </>
  );
};

export default Home;
