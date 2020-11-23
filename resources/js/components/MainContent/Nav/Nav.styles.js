import styled from "styled-components";
import Button from "@material-ui/core/Button";
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
    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 0.6fr;
        .links a {
            font-size: 0.9rem;
        }
    }
`;
export const RegisterButton = styled(Button)`
    && {
        background-color: #6772e5;
        color: ${props => props.theme.primaryColor};
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
        padding: 7px 24px;
        font-size: 1rem;
        font-weight: bold;
        &:hover {
            background-color: #5469d4;
        }
        @media screen and (max-width: 1400px) {
            padding: 5px 20px;
            font-size: 0.9rem;
        }
    }
`;
