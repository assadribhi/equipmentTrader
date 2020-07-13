// React
import React from "react";

// Stores
import equipmentStore from "../../stores/equipmentStore";

// Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    equipmentStore.deleteItem(props.equipmentId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
