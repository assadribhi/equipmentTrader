// React
import React from "react";

// Styles
import { Descreption, Title, GlobalStyle, YardImage } from "./styles";

// Theme
import { ThemeProvider } from "styled-components";

// Components
import EquipmentList from "./components/EquipmentList";

const theme = {
  mainColor: "#ffffff",
  backgroundColor: "#c0c0c0",
  fontColor: "#000000",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Title>Heavy Equipment Trader</Title>
        <YardImage
          src="https://previews.123rf.com/images/kovacevic/kovacevic1302/kovacevic130200009/17794615-under-construction-sign-with-helmet-and-heavy-machine.jpg"
          alt="Shop Logo"
        />
        <Descreption>
          Your Destination for all your Heavy Equipment needs.
        </Descreption>
      </div>
      <EquipmentList />
    </ThemeProvider>
  );
}

export default App;
