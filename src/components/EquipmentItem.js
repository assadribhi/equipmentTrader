// React
import React from "react";

// Styles

import { EquipmentWrapper } from "../styles";

const EquipmentItem = (props) => {
  const equipment = props.equipment;
  return (
    <EquipmentWrapper key={equipment.id}>
      <img src={equipment.image} alt={equipment.name} />
      <p className="equipmentName">{equipment.name} Rental</p>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
    </EquipmentWrapper>
  );
};

export default EquipmentItem;
