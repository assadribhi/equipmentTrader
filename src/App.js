// React
import React, { useState } from "react";

// Styles
import {
  Descreption,
  Title,
  ThemeSwitcher,
  GlobalStyle,
  YardImage,
} from "./styles";

// Theme
import { ThemeProvider } from "styled-components";

// Components
import EquipmentList from "./components/EquipmentList";

const theme = {
  lightTheme: {
    backgroundColor: "#c0c0c0",
    fontColor: "#000000",
    priceFontColor: "#FFD300",
    deleteButtonColor: "#8B0000",
  },
  darkTheme: {
    backgroundColor: "#000000",
    fontColor: "#c0c0c0",
    priceFontColor: "#FFD300",
    deleteButtonColor: "#8B0000",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
    console.log(currentTheme);
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ThemeSwitcher onClick={toggleTheme}>
        {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
      </ThemeSwitcher>
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
