// React
import React from "react";
import { useHistory } from "react-router-dom";

// Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const history = useHistory();
  const handleDelete = () => {
    props.deleteItem(props.equipmentId);
    history.push("/equipment");
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
