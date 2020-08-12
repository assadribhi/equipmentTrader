// React
import React, { useState } from "react";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

// Styles
import {
  NavStyled,
  NavLinkStyled,
  ThemeSwitcher,
  Logo,
  UsernameStyled,
} from "../styles";
import logo from "../logo.png";
import SignupButton from "./buttons/SignupButton";
import SignInButton from "./buttons/SignInButton";
import { FiLogOut } from "react-icons/fi";

import YardModal from "../components/modals/YardModal";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <Logo className="navbar-brand" to="/">
        <img src={logo} alt={logo} />
      </Logo>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {authStore.user?.role && (
            <>
              <li className="nav-item">
                <NavLinkStyled to="/yards" className="nav-link">
                  Yards
                </NavLinkStyled>
              </li>
              <li className="nav-item">
                <NavLinkStyled to="/equipment" className="nav-link">
                  Equipment
                </NavLinkStyled>
              </li>
            </>
          )}
          {authStore.user ? (
            <>
              <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
              <FiLogOut
                onClick={authStore.signOut}
                size="2em"
                color={props.currentTheme === "lightTheme" ? "white" : "black"}
              />
            </>
          ) : (
            <>
              <li className="nav-item">
                <SignupButton />
              </li>
              <li className="nav-item">
                <SignInButton />
              </li>
            </>
          )}
          <li className="nav-item">
            {authStore.user && !authStore.user.yardSlug && (
              <UsernameStyled onClick={openModal}> Create Yard</UsernameStyled>
            )}
            <YardModal isOpen={isOpen} closeModal={closeModal} />;
          </li>
          <li className="nav-item">
            <ThemeSwitcher onClick={props.toggleTheme}>
              {props.currentTheme === "lightTheme" ? "Dark" : "Light"} Mode
            </ThemeSwitcher>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
