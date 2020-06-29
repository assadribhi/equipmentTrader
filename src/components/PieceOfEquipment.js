// React
import React from "react";

// Styles
import style from "../styles";

const PieceOfEquipment = (props) => {
  const equipment = props.equipmentName;
  return (
    <div style={style.equipment} key={equipment.id}>
      <img
        src={equipment.image}
        alt={equipment.name}
        style={style.equipmentImage}
      />
      <p style={style.text}>{equipment.name} Rental</p>
      <p style={style.text}>{equipment.price} KD / Day</p>
    </div>
  );
};

export default PieceOfEquipment;
