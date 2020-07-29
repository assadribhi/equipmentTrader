// React
import React from "react";

// Styles
import { NavStyled, NavLinkStyled, ThemeSwitcher, Logo } from "../styles";
import logo from "../logo.png";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <Logo className="navbar-brand" to="/">
        <img src={logo} alt={logo} />
      </Logo>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
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

export default NavBar;
