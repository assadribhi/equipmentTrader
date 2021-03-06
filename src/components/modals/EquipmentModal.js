// React
import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import equipmentStore from "../../stores/equipmentStore";

// Style
import { customStyles, CreateButtonStyled } from "../../styles";

const EquipmentModal = ({ isOpen, closeModal, oldEquipment, yard }) => {
  const [equipment, setEquipment] = useState(
    oldEquipment ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setEquipment({ ...equipment, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setEquipment({ ...equipment, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    equipmentStore[oldEquipment ? "updateEquipment" : "createEquipment"](
      equipment,
      yard
    );
    closeModal(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>{oldEquipment ? "Edit Equipment" : "New Equipment"}</h3>
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
              value={equipment.name}
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
              value={equipment.price}
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
            value={equipment.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            className="form-control"
            type="file"
            name="image"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldEquipment ? "Update" : "Add"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default EquipmentModal;
