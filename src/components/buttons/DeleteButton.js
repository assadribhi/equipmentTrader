import React from "react";

// Stores
import equipmentStore from "../../stores/equipmentStore";
import yardStore from "../../stores/yardStore";

// Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ equipmentId, yardId }) => {
  const handleDelete = () => {
    yardId
      ? yardStore.deleteYard(yardId)
      : equipmentStore.deleteItem(equipmentId);
  };
  return (
    <div>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </div>
  );
};

export default DeleteButton;
