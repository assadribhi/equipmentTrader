import React from "react";
import items from "./items";
import style from "./styles";

function App() {
  const itemList = items.map((item) => (
    <div style={style.equipment}>
      <img src={item.image} alt={item.name} style={style.equipmentImage} />
      <p style={style.text}>{item.name} Rental</p>
      <p style={style.text}>{item.price} KD / Day</p>
    </div>
  ));
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
      <div style={style.list}>{itemList}</div>
    </div>
  );
}

export default App;
