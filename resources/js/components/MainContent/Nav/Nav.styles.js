import styled from "styled-components";
import Button from "@material-ui/core/Button";
export const NavWrapper = styled.div`
    height: 5em;
    display: grid;
    grid-template-columns: 150px auto;

    margin-bottom: 5rem;
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
    grid-template-columns: 2fr 1.3fr;
    grid-column-gap: 20px;
    align-items: center;
    justify-items: space-between;
    .links {
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-between;
        a {
            font-family: ${props => props.theme.titleFont};
            box-sizing: border-box;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: ${props => props.theme.textPrimary};
            border: 2px solid transparent;
            font-size: 1rem;
            font-weight: bold;
        }
    }
    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 0.6fr;
        .links a {
            font-size: 0.9rem;
        }
    }
`;
export const RegisterButton = styled(Button)`
    && {
        padding: 7px 24px;
        font-size: 0.9rem;

        @media screen and (max-width: 1400px) {
            padding: 5px 20px;
            font-size: 0.9rem;
        }
    }
`;
export const LogoutButton = styled(Button)`
    && {
        width: 8rem;
    }
`;
export const DropDown = styled.div`
    position: absolute;
    top: 4em;

    height: 2.5rem;
    width: 8rem;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    display: flex;

    .logout {
        margin: auto;
        cursor: pointer;
    }
    :hover {
        background-color: #f1f1f1;
    }
`;
