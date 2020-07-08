// Components
import DeleteButton from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";

// React
import React from "react";

// Styles
import { DetailWrapper } from "../styles";

const EquipmentDetail = (props) => {
  const { equipmentSlug } = useParams();

  const equipment = props.items.find(
    (equipment) => equipment.slug === equipmentSlug
  );
  if (!equipment) return <Redirect to="/equipment" />;
  return (
    <DetailWrapper>
      <img src={equipment.image} alt={equipment.name} />
      <h1 className="equipmentName">{equipment.name} </h1>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
      <p className="equipmentDescription">{equipment.description} Rental</p>
      <DeleteButton equipmentId={equipment.id} deleteItem={props.deleteItem} />
    </DetailWrapper>
  );
};
export default EquipmentDetail;
