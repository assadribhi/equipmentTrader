// React
import React from "react";
// Data
import items from "../items";
// Styles
import style from "../styles";
// Components
import PieceOfEquipment from "./PieceOfEquipment";

const EquipmentList = () => {
  const itemList = items.map((pieceOfEquipment) => (
    <PieceOfEquipment
      equipmentName={pieceOfEquipment}
      key={pieceOfEquipment.id}
    />
  ));
  return <div style={style.list}>{itemList}</div>;
};

export default EquipmentList;
