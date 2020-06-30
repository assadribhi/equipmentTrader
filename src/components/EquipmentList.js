// React
import React from "react";

// Data
import items from "../items";

// Styles
import { ListWrapper } from "../styles";

// Components
import EquipmentItem from "./EquipmentItem";

const EquipmentList = () => {
  const itemList = items.map((equipment) => (
    <EquipmentItem equipment={equipment} key={equipment.id} />
  ));
  return <ListWrapper>{itemList}</ListWrapper>;
};

export default EquipmentList;
