import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: black;
`;

const ThemeSwitcher = styled.button`
  margin: 20px;
  padding: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Descreption = styled.h4`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
body {
  color:${(props) => props.theme.fontColor};
  background-color:${(props) => props.theme.backgroundColor};

}
`;

const YardImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const EquipmentWrapper = styled.div`
  margin: 20px;

  img {
    width: 300px;
  }

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

export {
  Title,
  ThemeSwitcher,
  GlobalStyle,
  Descreption,
  YardImage,
  ListWrapper,
  EquipmentWrapper,
};
// const style = {
//   equipmentImage: { width: "300px" },

//   equipment: { margin: "20px" },
// };

// export default style;
