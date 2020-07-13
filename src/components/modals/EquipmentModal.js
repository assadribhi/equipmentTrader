import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import equipmentStore from "../../stores/equipmentStore";

// Style
import { customStyles, CreateButtonStyled } from "../../styles";

const EquipmentModal = ({ isOpen, closeModal }) => {
  const [equipment, setEquipment] = useState({
    id: 0,
    name: "",
    slug: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setEquipment({ ...equipment, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    equipmentStore.createEquipment(equipment);
    closeModal(true);
  };

  const idMaker = (event) => {
    setEquipment({ ...equipment, id: equipment.id + 100 });
    setEquipment({ ...equipment, slug: equipment.name.replace(" ", "-") });
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
        <CreateButtonStyled className="btn float-right" onClick={idMaker}>
          Add
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default EquipmentModal;
