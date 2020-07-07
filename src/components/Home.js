import React from "react";

// Styles
import { Descreption, Title, YardImage } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Heavy Equipment Trader</Title>
      <YardImage
        src="https://previews.123rf.com/images/kovacevic/kovacevic1302/kovacevic130200009/17794615-under-construction-sign-with-helmet-and-heavy-machine.jpg"
        alt="Shop Logo"
      />
      <Descreption>
        Your Destination for all your Heavy Equipment needs.
      </Descreption>
    </>
  );
};

export default Home;
