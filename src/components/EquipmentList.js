// React
import React from "react";

// Styles
import { ListWrapper } from "../styles";

// Components
import EquipmentItem from "./EquipmentItem";

const EquipmentList = (props) => {
  const itemList = props.items.map((equipment) => (
    <EquipmentItem
      equipment={equipment}
      key={equipment.id}
      deleteItem={props.deleteItem}
      selectEquipment={props.selectEquipment}
    />
  ));
  return <ListWrapper>{itemList}</ListWrapper>;
};

export default EquipmentList;
