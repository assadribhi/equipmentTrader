import React from "react";
import { Redirect } from "react-router-dom";

import authStore from "../stores/authStore";

// Styles
import { Description, Title, YardImage } from "../styles";

const Home = () => {
  if (authStore.user && authStore.user.yardSlug) {
    return <Redirect to={`/yards/${authStore.user.yardSlug}`} />;
  }
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
