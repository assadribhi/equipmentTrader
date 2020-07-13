// Components
import DeleteButton from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";

// Mobx
import { observer } from "mobx-react";

// React
import React from "react";

// Stores
import equipmentStore from "../stores/equipmentStore";

// Styles
import { DetailWrapper } from "../styles";
import UpdateButton from "./buttons/UpdateButton";

const EquipmentDetail = (props) => {
  const { equipmentSlug } = useParams();

  const equipment = equipmentStore.equipment.find(
    (equipment) => equipment.slug === equipmentSlug
  );
  if (!equipment) return <Redirect to="/equipment" />;
  return (
    <DetailWrapper>
      <img src={equipment.image} alt={equipment.name} />
      <h1 className="equipmentName">{equipment.name} </h1>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
      <p className="equipmentDescription">{equipment.description} Rental</p>
      <UpdateButton equipment={equipment} />
      <DeleteButton equipmentId={equipment.id} />
    </DetailWrapper>
  );
};
export default observer(EquipmentDetail);
