import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
export const LoginWrapper = styled.div`
    display: grid;
    height: 70vh;
    grid-template-columns: 1.5fr 1fr;
    margin-top: -30px;
    align-items: center;
    justify-items: start;
    .svg {
        img {
            height: 100%;
            width: 100%;
        }
    }
    .login-form {
        height: 380px;
        width: 350px;
        display: grid;
        justify-self: end;
        grid-template-rows: 0.8fr auto 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        .form-title {
            font-size: 1.8rem;
            .title-text {
                font-family: ${props => props.theme.titleFont};
            }

            color: ${props => props.theme.textPrimary};
        }
        .error-text {
            margin-top: 10px;
            color: red;
        }
    }
    @media only screen and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
        .login-form {
            width: 350px;
        }
    }
`;
export const RegisterWrapper = styled(LoginWrapper)`
    .login-form {
        height: 440px;
        width: 370px;
        align-items: start;
        grid-template-rows: 0.8fr auto repeat(6, 1fr);
        .form-title {
            align-self: end;
        }
    }
    .register-button {
        align-self: start;
        margin-top: 5px;
    }
    @media only screen and (min-width: 1600px) {
        .login-form {
            height: 500px;
        }
    }
`;
export const StyledTextField = styled(TextField)`
    && {
        width: 270px;
        .MuiOutlinedInput-input {
        }
    }
`;
