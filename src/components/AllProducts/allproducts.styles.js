import styled from "styled-components";
import { DivContainer } from "../Products/products.styles";

export const ContainerCard = styled.div `
      background-color: ${(props) => props.theme.background.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 10px;
      align-content: center;
`

export const ProductsCard = styled.div `
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      padding: 15px;
      text-align: center;
      margin: 20px auto;
      font-size: 1rem;
      width: 300px;
      height: 400px;
      margin: 10px;
      transition: all 0.9s ease-out;
      :hover {
            cursor: pointer;    
      }
`

export const ImageProduct = styled.img `
      max-width: 50%;
      margin: auto;
`

export const ContainerProduct = styled(DivContainer) `
      background-color: ${(props) => props.theme.background.primary};
      margin: 0;
      padding: 10px;
`