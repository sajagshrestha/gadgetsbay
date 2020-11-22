import styled from "styled-components";
import { Button } from "@material-ui/core";
export const NavWrapper = styled.div`
    height: 5em;
    display: grid;
    grid-template-columns: 150px auto;

    margin-bottom: 50px;
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
        width: 120px;
        height: 60px;
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
            box-sizing: border-box;
            padding: 5px;
            text-decoration: none;
            color: ${props => props.theme.textPrimary};
            font-weight: bold;
            font-size: 1rem;
        }
    }
`;
export const RegisterButton = styled(Button)`
    background-color: red;
    border-radius: 0;
`;
