// Modals
import EquipmentModal from "../modals/EquipmentModal";

// React
import React, { useState } from "react";

// Styles
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ equipment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <EquipmentModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldEquipment={equipment}
      />
    </div>
  );
};

export default UpdateButton;
