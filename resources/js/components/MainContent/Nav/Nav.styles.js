import styled from "styled-components";

export const NavWrapper = styled.div`
    height: 5em;
    display: grid;
    grid-template-columns: 1fr 5fr;
    cursor: pointer;
    margin-bottom: 20px;
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 120px;
        height: 50px;
    }
`;
export const NavLinks = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    align-items: center;
    justify-items: space-between;
    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: ${props => props.theme.textPrimary};
            font-weight: bold;
            font-size: 1rem;
        }
    }
`;
export const RegisterButton = styled.div`
    border: none;
    background-color: ${props => props.theme.secondaryColor};
    color: white;
    border-radius: 20px;
    padding: 10px 25px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
`;
