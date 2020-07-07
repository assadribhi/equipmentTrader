// Data
import items from "./items";
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
import EquipmentDetails from "./components/EquipmentDetails";

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
  const [equipment, setEquipment] = useState(null);
  const [_items, setItems] = useState(items);
  const [currentTheme, setCurrentTheme] = useState("lightTheme");

  const deleteItem = (itemId) => {
    const updatedEquipmentList = _items.filter(
      (equipment) => equipment.id !== +itemId
    );
    setItems(updatedEquipmentList);
    setEquipment(null);
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme");
    console.log(currentTheme);
  };

  const selectEquipment = (equipmentId) => {
    const selectedEquipment = items.find(
      (equipment) => equipmentId === equipment.id
    );
    setEquipment(selectedEquipment);
  };

  const setView = () => {
    if (equipment)
      return (
        <EquipmentDetails
          equipment={equipment}
          deleteItem={deleteItem}
          setEquipment={setEquipment}
        />
      );
    return (
      <EquipmentList
        items={_items}
        selectEquipment={selectEquipment}
        deleteItem={deleteItem}
      />
    );
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

      {setView()}
    </ThemeProvider>
  );
}

export default App;
