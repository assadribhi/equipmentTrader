import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const DeleteButtonStyled = styled.button`
  color: ${(props) => props.theme.deleteButtonColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0px;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    margin: 20px;
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;

    &.equipmentName {
      color: ${(props) => props.theme.fontColor};
    }
    &.equipmentPrice {
      color: ${(props) => props.theme.priceFontColor};
      font-weight: bold;
    }
    &.yardName {
      color: ${(props) => props.theme.fontColor};
    }
    &.yardPrice {
      color: ${(props) => props.theme.priceFontColor};
      font-weight: bold;
    }
  }
`;

export const EquipmentWrapper = styled.div`
  margin: 50px;
  padding: 10px;

  img {
    margin: 10px;
    width: 300px;
  }

  text-align: center;

  p {
    &.equipmentName {
      color: ${(props) => props.theme.fontColor};
    }
    &.equipmentPrice {
      color: ${(props) => props.theme.priceFontColor};
      font-weight: bold;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
body {
  color:${(props) => props.theme.fontColor};
  background-color:${(props) => props.theme.backgroundColor};

}
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Logo = styled(Link)`
  padding: 0.75em;
  img {
    width: 8em;
  }
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.navBarColor};
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${(props) => props.theme.inActiveFontColor};

  &.active {
    padding: 0.25em 1em;

    color: ${(props) => props.theme.activeFontColor};
  }
`;

export const SearchBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ThemeSwitcher = styled.button`
  padding: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

export const UpdateButtonStyled = styled.button`
  color: ${(props) => props.theme.updateButtonColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0px;
`;

export const YardImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

export const YardWrapper = styled.div`
  margin: 20px;
  padding: 10px;

  img {
    margin: 10px;
    width: 300px;
  }

  text-align: center;

  p {
    &.equipmentName {
      color: ${(props) => props.theme.fontColor};
    }
    &.equipmentPrice {
      color: ${(props) => props.theme.priceFontColor};
      font-weight: bold;
    }
  }
`;
