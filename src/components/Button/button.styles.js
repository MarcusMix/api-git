import styled from "styled-components";

export const CustomButton = styled.button `
  padding: 10px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  margin: 10px;
  border-radius: 1rem;
  border: none;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : props.theme.colors.sucess};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
  }
`

