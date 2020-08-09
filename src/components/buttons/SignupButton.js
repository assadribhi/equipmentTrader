import React, { useState } from "react";
import { AuthButtonStyled } from "../../styles";
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <AuthButtonStyled onClick={openModal}>Sign Up !!!</AuthButtonStyled>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SignupButton;
