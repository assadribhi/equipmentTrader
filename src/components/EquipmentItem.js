// React
import React from "react";
import { Link } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";

import { observer } from "mobx-react";

// Styles

import { EquipmentWrapper } from "../styles";
import UpdateButton from "./buttons/UpdateButton";

const EquipmentItem = ({ equipment, deleteItem }) => {
  return (
    <EquipmentWrapper key={equipment.id} className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/equipment/${equipment.slug}`}>
        <img src={equipment.image} alt={equipment.name} />
      </Link>
      <p className="equipmentName">{equipment.name} Rental</p>
      <p className="equipmentPrice">{equipment.price} KD / Day</p>
      <UpdateButton equipment={equipment} />
      <br />
      <DeleteButton equipmentId={equipment.id} deleteItem={deleteItem} />
    </EquipmentWrapper>
  );
};

export default observer(EquipmentItem);
