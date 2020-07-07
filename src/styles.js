import styled, { createGlobalStyle } from "styled-components";

export const DeleteButtonStyled = styled.button`
  color: ${(props) => props.theme.deleteButtonColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0px;
`;

export const Descreption = styled.h4`
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
`;

export const EquipmentWrapper = styled.div`
  margin: 20px;

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

export const ReturnButtonStyled = styled.button`
  color: ${(props) => props.theme.returnButtonColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0px;
`;

export const SearchBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ThemeSwitcher = styled.button`
  margin: 20px;
  padding: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

export const YardImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

// const style = {
//   equipmentImage: { width: "300px" },

//   equipment: { margin: "20px" },
// };

// export default style;
