// Data
import items from "./items";

// React
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

// Styles
import { ThemeSwitcher, GlobalStyle } from "./styles";

// Theme
import { ThemeProvider } from "styled-components";

// Components
import EquipmentList from "./components/EquipmentList";
import EquipmentDetails from "./components/EquipmentDetails";
import Home from "./components/Home";

const theme = {
  lightTheme: {
    backgroundColor: "#c0c0c0",
    fontColor: "#000000",
    priceFontColor: "#FFD300",
    deleteButtonColor: "#ff0000",
    returnButtonColor: "#008000",
  },
  darkTheme: {
    backgroundColor: "#000000",
    fontColor: "#c0c0c0",
    priceFontColor: "#FFD300",
    deleteButtonColor: "#ff0000",
    returnButtonColor: "#008000",
  },
};

function App() {
  const [equipment, setEquipment] = useState(1);
  const [_items, setItems] = useState(items);
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const deleteItem = (itemId) => {
    const updatedEquipmentList = _items.filter(
      (equipment) => equipment.id !== +itemId
    );
    setItems(updatedEquipmentList);
    setEquipment(null);
  };
  console.log(equipment);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
    console.log(currentTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Link to="/" style={{ margin: 10, float: "right" }}>
        Home
      </Link>
      <Link to="/equipment" style={{ margin: 10, float: "right" }}>
        Equipment
      </Link>
      <ThemeSwitcher onClick={toggleTheme}>
        {currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
      </ThemeSwitcher>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/equipment/:equipmentName">
          <EquipmentDetails deleteItem={deleteItem} items={_items} />
        </Route>
        <Route path="/equipment">
          <EquipmentList items={_items} deleteItem={deleteItem} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
