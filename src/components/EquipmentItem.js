// React
import React from "react";

// Components
import DeleteButton from "./buttons/DeleteButton";

// Styles

import { EquipmentWrapper } from "../styles";

const EquipmentItem = (props) => {
  const equipment = props.equipment;

  return (
    <EquipmentWrapper key={equipment.id}>
      <img
        src={equipment.image}
        alt={equipment.name}
        onClick={() => props.selectEquipment(equipment.id)}
      />
      <p className="equipmentName">{equipment.name} Rental</p>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
      <DeleteButton equipmentId={equipment.id} deleteItem={props.deleteItem} />
    </EquipmentWrapper>
  );
};

export default EquipmentItem;
