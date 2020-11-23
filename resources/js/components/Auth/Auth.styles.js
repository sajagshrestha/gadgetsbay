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
        height: 420px;
        width: 350px;
        display: grid;

        grid-template-rows: 0.8fr 40px 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        .form-title {
            font-size: 2rem;
            align-self: end;
            color: ${props => props.theme.textPrimary};
        }
        .error-text {
            margin-top: 10px;
            color: red;
        }
    }
`;

export const StyledTextField = styled(TextField)`
    width: 280px;
`;
