// React
import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import yardStore from "../../stores/yardStore";

// Style
import { customStyles, CreateButtonStyled } from "../../styles";

const YardModal = ({ isOpen, closeModal, oldYard }) => {
  const [yard, setYard] = useState(
    oldYard ?? {
      name: "",
      yardImage: "",
    }
  );

  const handleChange = (event) => {
    setYard({ ...yard, [event.target.name]: event.target.value });
  };

  const handleYardImage = (event) =>
    setYard({ ...yard, yardImage: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    yardStore[oldYard ? "updateYard" : "createYard"](yard);
    closeModal(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>{oldYard ? "Edit Yard" : "New Yard"}</h3>
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
              value={yard.name}
            />
          </div>
          <div className="form-group">
            <label>Yard Image</label>
            <input
              className="form-control"
              type="file"
              name="yardImage"
              onChange={handleYardImage}
            />
          </div>
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldYard ? "Update" : "Add"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default YardModal;
