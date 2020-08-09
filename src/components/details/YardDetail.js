// Components
import DeleteButton from "../buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";
import EquipmentList from "../lists/EquipmentList";

// Mobx
import { observer } from "mobx-react";

// React
import React from "react";

// Stores
import yardStore from "../../stores/yardStore";

// Styles
import { DetailWrapper } from "../../styles";
import UpdateButton from "../buttons/UpdateButton";
import AddButton from "../buttons/AddButton";
import equipmentStore from "../../stores/equipmentStore";

const YardDetail = (props) => {
  const { yardSlug } = useParams();

  const yard = yardStore.yards.find((yard) => yard.slug === yardSlug);
  if (!yard) return <Redirect to="/yards" />;

  let equipment = [];
  if (yard.equipment) {
    equipment = yard.equipment
      .map((equipment) => equipmentStore.getEquipmentById(equipment.id))
      .filter((equipment) => equipment);
  }

  return (
    <div>
      <DetailWrapper>
        <img src={yard.yardImage} alt={yard.name} />
        <h1 className="yardName">{yard.name} </h1>
        <p className="yardPrice">{yard.price} KD / Day</p>
        <p className="yardDescription">{yard.description} Rental</p>
        <UpdateButton yard={yard} />
        <DeleteButton yardId={yard.id} />
      </DetailWrapper>

      <EquipmentList equipment={equipment} />

      <AddButton yard={yard} />
    </div>
  );
};
export default observer(YardDetail);
