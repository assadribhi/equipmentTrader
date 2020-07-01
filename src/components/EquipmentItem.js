// React
import React from "react";

// Styles

import { EquipmentWrapper, DeleteButtonStyled } from "../styles";

const EquipmentItem = (props) => {
  const equipment = props.equipment;
  const handleDelete = () => {
    props.deleteItem(equipment.id);
  };
  return (
    <EquipmentWrapper key={equipment.id}>
      <img src={equipment.image} alt={equipment.name} />
      <p className="equipmentName">{equipment.name} Rental</p>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </EquipmentWrapper>
  );
};

export default EquipmentItem;
