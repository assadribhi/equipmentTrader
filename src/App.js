// Data
import items from "./items";

// React
import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Styles
import { GlobalStyle } from "./styles";

// Theme
import { ThemeProvider } from "styled-components";

// Components
import EquipmentList from "./components/EquipmentList";
import EquipmentDetails from "./components/EquipmentDetails";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

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
  },
};

function App() {
  const [_items, setItems] = useState(items);
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const createEquipment = (newEquipment) => {
    const updatedEquipment = _items;
    updatedEquipment.push(newEquipment);
    setItems(updatedEquipment);
  };

  const deleteItem = (itemId) => {
    const updatedEquipmentList = _items.filter(
      (equipment) => equipment.id !== +itemId
    );
    setItems(updatedEquipmentList);
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
    console.log(currentTheme);
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
          <EquipmentDetails deleteItem={deleteItem} items={_items} />
        </Route>
        <Route path="/equipment">
          <EquipmentList
            items={_items}
            createEquipment={createEquipment}
            deleteItem={deleteItem}
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
