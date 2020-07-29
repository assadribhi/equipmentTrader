// React
import React, { useState } from "react";

import NavBar from "./components/NavBar";

import Routes from "./components/Routes";
import yardStore from "./stores/yardStore";
import equipmentStore from "./stores/equipmentStore";

// Styles
import { GlobalStyle } from "./styles";

// Theme
import { ThemeProvider } from "styled-components";
import { observer } from "mobx-react";

const theme = {
  lightTheme: {
    backgroundColor: "#c0c0c0",
    navBarColor: "#000000",
    fontColor: "#000000",
    inActiveFontColor: "#c0c0c0",
    activeFontColor: "#FFD300",
    priceFontColor: "#FFD300",
    deleteButtonColor: "#ff0000",
    returnButtonColor: "#008000",
    updateButtonColor: "#10a5f5",
  },
  darkTheme: {
    backgroundColor: "#000000",
    navBarColor: "#c0c0c0",
    fontColor: "#c0c0c0",
    inActiveFontColor: "#000000",
    activeFontColor: "#FFD300",
    priceFontColor: "#FFD300",
    deleteButtonColor: "#ff0000",
    returnButtonColor: "#008000",
    updateButtonColor: "#10a5f5",
  },
};

function App() {
  const savedTheme = localStorage.getItem("Theme") ?? "lightTheme";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "lightTheme" ? "darkTheme" : "lightTheme";
    setCurrentTheme(newTheme);

    localStorage.setItem("Theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      {yardStore.loading || equipmentStore.loading ? (
        <h1>Loading</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
