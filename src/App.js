// React
import React from "react";

// Styles
import style from "./styles";
// Components
import EquipmentList from "./components/EquipmentList";

function App() {
  return (
    <div>
      <div>
        <h1 style={style.text}>Heavy Equipment Trader</h1>
        <img
          src="https://previews.123rf.com/images/kovacevic/kovacevic1302/kovacevic130200009/17794615-under-construction-sign-with-helmet-and-heavy-machine.jpg"
          alt="Shop Logo"
          style={style.yardImage}
        />
        <h4 style={style.text}>
          Your Destination for all your Heavy Equipment needs.
        </h4>
      </div>
      <EquipmentList />
    </div>
  );
}

export default App;
