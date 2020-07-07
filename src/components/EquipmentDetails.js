// Components
import DeleteButton from "./buttons/DeleteButton";

// React
import React from "react";

// Styles
import { DetailWrapper, ReturnButtonStyled } from "../styles";

const EquipmentDetail = (props) => {
  const equipment = props.equipment;

  const returnToList = () => {
    props.setEquipment(null);
  };
  return (
    <DetailWrapper>
      <img src={equipment.image} alt={equipment.name} />
      <h1 className="equipmentName">{equipment.name} </h1>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
      <p className="equipmentDescription">{equipment.description} Rental</p>
      <DeleteButton equipmentId={equipment.id} deleteItem={props.deleteItem} />
      <ReturnButtonStyled onClick={returnToList}>
        Back To List View
      </ReturnButtonStyled>
    </DetailWrapper>
  );
};
export default EquipmentDetail;
