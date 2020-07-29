import React, { useState } from "react";

import { MdAddCircleOutline } from "react-icons/md";

import EquipmentModal from "../modals/EquipmentModal";
import YardModal from "../modals/YardModal";

const AddButton = ({ yardId }) => {
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
      {yardId ? (
        <EquipmentModal
          isOpen={isOpen}
          closeModal={closeModal}
          yardId={yardId}
        />
      ) : (
        <YardModal isOpen={isOpen} closeModal={closeModal} yardId={yardId} />
      )}
    </>
  );
};

export default AddButton;
