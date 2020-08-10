// React
import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import authStore from "../../stores/authStore";

// Style
import { customStyles, CreateButtonStyled } from "../../styles";

const SignInModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signIn(user);
    closeModal(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>Sign Up Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Name</label>
          <input
            className="form-control"
            type="text"
            required="required"
            name="username"
            onChange={handleChange}
            value={user.username}
          />
        </div>

        <div className="col-6">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            required="required"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>

        <CreateButtonStyled className="btn float-right">
          Sign Up
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SignInModal;
