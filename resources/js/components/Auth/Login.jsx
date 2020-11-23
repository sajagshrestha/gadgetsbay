import React, { useState, useContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";
import { Formik, Form, Field, useField } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { LoginWrapper, StyledTextField } from "./Auth.styles";
import LoginSvg from "../SVGassets/login.svg";
export const MytextField = props => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <StyledTextField
            {...props}
            {...field}
            variant="outlined"
            helperText={errorText}
            error={!!errorText}
        />
    );
};

const Login = () => {
    const { user, dispatch } = React.useContext(UserContext);
    const initialValues = {
        email: "",
        password: ""
    };
    const [errorText, setErrorText] = useState("");
    const validationSchema = yup.object({
        email: yup
            .string()
            .required()
            .email(),
        password: yup
            .string()
            .min(8)
            .required()
    });

    const onSubmitHandler = (data, actions) => {
        axios
            .post("/api/login", data)
            .then(res => {
                dispatch({
                    type: "login",
                    name: res.data.user.name,
                    token: res.data.access_token
                });
                const localUser = {
                    isLoggedIn: true,
                    name: res.data.user.name,
                    token: res.data.access_token
                };
                localStorage.setItem("user", JSON.stringify(localUser));
            })
            .catch(error => {
                actions.setSubmitting(false);
                setErrorText("Invalid email or password");
            });
    };

    if (user.isLoggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <LoginWrapper>
            <div className="svg">
                <img src={LoginSvg} alt="login svg" />
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
            >
                {({ isSubmitting }) => (
                    <Form className="login-form">
                        <div className="form-title">
                            <div className="title-text">Login</div>
                        </div>
                        <div className="error-text">{errorText}</div>
                        <div>
                            <MytextField name="email" label="E-mail" />
                        </div>
                        <div>
                            <MytextField
                                name="password"
                                label="Password"
                                type="password"
                            />
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </LoginWrapper>
    );
};

export default Login;
