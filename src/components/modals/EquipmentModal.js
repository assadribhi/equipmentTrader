import React, { useState } from "react";
import Modal from "react-modal";

// Style
import { customStyles, CreateButtonStyled } from "../../styles";

const EquipmentModal = ({ isOpen, closeModal, createEquipment }) => {
  const [equipment, setEquipment] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setEquipment({ ...equipment, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createEquipment(equipment);
    closeModal(true);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>New Equipment</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              required="required"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              className="form-control"
              type="number"
              min="25"
              required="required"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            required="required"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            className="form-control"
            type="text"
            required="required"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right">Add</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default EquipmentModal;
