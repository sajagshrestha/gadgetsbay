import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
export const LoginWrapper = styled.div`
    display: grid;
    height: 70vh;
    grid-template-columns: 1fr 0.8fr;
    align-items: center;
    justify-items: center;
    .svg {
        img {
            height: 100%;
            width: 100%;
        }
    }
    .login-form {
        height: 450px;
        width: 350px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;

        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        .form-title {
            font-size: 2rem;

            color: ${props => props.theme.textPrimary};
        }
    }
`;

export const StyledTextField = styled(TextField)`
    width: 250px;
`;
