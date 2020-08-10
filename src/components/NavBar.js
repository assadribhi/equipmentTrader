// React
import React from "react";
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

const NavBar = (props) => {
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
            <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
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
