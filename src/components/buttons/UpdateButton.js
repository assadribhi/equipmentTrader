import React, { useState } from "react";

import { UpdateButtonStyled } from "../../styles";

import EquipmentModal from "../modals/EquipmentModal";

const UpdateButton = ({ equipment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Hi</UpdateButtonStyled>
      <EquipmentModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldEquipment={equipment}
      />
    </>
  );
};

export default UpdateButton;
