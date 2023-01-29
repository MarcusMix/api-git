import styled from "styled-components";

export const DivContainer = styled.div `
    margin: auto;
    display: flex;
    align-items: center;
    margin-top: 80px;
    /* background-color: red; */
    text-align: center;
    justify-content: space-around;
`

  export const Title = styled.h1 `
    text-align: center;
    font-size: 30px;
    /* margin-top: 80px; */
    /* margin: auto; */
  `

  export const Product = styled.section `
    max-width: 500px;
    /* background-color: green; */
    padding: 10px;
  `

  export const H2 = styled.h2 `
    text-align: center;
    /* color: yellow; */
    margin: 0 0 20px;
    font-size: 2rem;
    border-bottom: 3px double yellow;
  `


  export const Select = styled.select `
    padding: 5px;
    font-size: 1.1rem;
    margin: 0 40px;
  `

  export const TitleMid = styled(Title)`
    margin: auto;
  `

  export const Image = styled.img`
    width: 50%;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  `