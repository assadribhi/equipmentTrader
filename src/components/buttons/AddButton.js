import React, { useState } from "react";

import { MdAddCircleOutline } from "react-icons/md";

import EquipmentModal from "../modals/EquipmentModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <MdAddCircleOutline
        className="float-right"
        size="2em"
        onClick={openModal}
      />
      <EquipmentModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
