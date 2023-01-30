import styled from "styled-components";

export const CustomButton = styled.button `
  padding: 10px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.sucess};
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
  }
`