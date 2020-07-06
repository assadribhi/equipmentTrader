// React
import React from "react";

// Styles
import {
  DeleteButtonStyled,
  DetailWrapper,
  ReturnButtonStyled,
} from "../styles";

const EquipmentDetail = (props) => {
  const equipment = props.equipment;

  const handleDelete = () => {
    props.deleteItem(equipment.id);
  };
  const returnToList = () => {
    props.setEquipment(null);
  };
  return (
    <DetailWrapper>
      <img src={equipment.image} alt={equipment.name} />
      <h1 className="equipmentName">{equipment.name} </h1>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
      <p className="equipmentDescription">{equipment.description} Rental</p>

      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
      <ReturnButtonStyled onClick={returnToList}>
        Back To List View
      </ReturnButtonStyled>
    </DetailWrapper>
  );
};
export default EquipmentDetail;
