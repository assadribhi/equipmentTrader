// React
import React, { useState } from "react";

// Data
import items from "../items";

// Styles
import { ListWrapper } from "../styles";

// Components
import EquipmentItem from "./EquipmentItem";

const EquipmentList = () => {
  const [_items, setItems] = useState(items);
  const deleteItem = (itemId) => {
    const updatedEquipmentList = _items.filter(
      (equipment) => equipment.id !== +itemId
    );
    setItems(updatedEquipmentList);
  };
  const itemList = _items.map((equipment) => (
    <EquipmentItem
      equipment={equipment}
      key={equipment.id}
      deleteItem={deleteItem}
    />
  ));
  return <ListWrapper>{itemList}</ListWrapper>;
};

export default EquipmentList;
