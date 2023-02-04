import styled from "styled-components";

export const LoginContainer = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: center;
    padding: 10px;
    margin: 2rem;
    text-align: center;
`

export const GoogleContainer = styled.div `
    margin: 20px;
    background-color: ${(props) => props.theme.background.primary};
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    width: 300px;
    text-align: center;
    cursor: pointer;
`