// React
import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Components
import EquipmentList from "./components/EquipmentList";
import EquipmentDetails from "./components/EquipmentDetails";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

// Styles
import { GlobalStyle } from "./styles";

// Theme
import { ThemeProvider } from "styled-components";

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
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/equipment/:equipmentSlug">
          <EquipmentDetails />
        </Route>
        <Route path="/equipment">
          <EquipmentList />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
