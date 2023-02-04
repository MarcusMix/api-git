import styled from "styled-components";

export const NavbarStyle = styled.nav`
    width: 100%;
    height: 90px;
    background-color: ${(props) => props.theme.background.dark};
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};

    & h1 {
        cursor: pointer;
    }
`

export const ContainerNav = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const AvatarIcon = styled.img `
    width: 50px;
    border-radius: 50%;
`