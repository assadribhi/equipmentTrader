// Modals
import EquipmentModal from "../modals/EquipmentModal";
import YardModal from "../modals/YardModal";

// React
import React, { useState } from "react";

// Styles
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ equipment, yard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {yard ? (
        <YardModal isOpen={isOpen} closeModal={closeModal} oldYard={yard} />
      ) : (
        <EquipmentModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldEquipment={equipment}
        />
      )}
    </div>
  );
};

export default UpdateButton;
