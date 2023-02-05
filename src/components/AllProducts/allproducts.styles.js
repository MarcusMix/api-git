import styled from "styled-components";
import { DivContainer } from "../Products/products.styles";

export const ContainerCard = styled.div `
      background-color: ${(props) => props.theme.background.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      flex-wrap: wrap;
      padding: 0 90px;
      align-content: center;
`

export const ProductsCard = styled.div `
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      padding: 20px;
      text-align: center;
      margin: 20px auto;
      font-size: 1rem;
      width: 280px;
      height: 300px;
      transition: all 0.9s ease-out;
      :hover {
            cursor: pointer;    
      }

      & p {
            font-size: 20px;
      }
`

export const ImageProduct = styled.img `
      max-width: 100px;
      max-height: 120px;
      margin: 20px auto;

      @media (max-width: 768px) {
         max-width: 40%;
      }
      
`

export const ContainerProduct = styled(DivContainer) `
      background-color: ${(props) => props.theme.background.primary};
      margin: 0;
      padding: 10px;
`