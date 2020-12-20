import React, { useState, useContext } from "react";
import axios from "axios";
import { Formik, Form, useField } from "formik";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { RegisterWrapper, StyledTextField } from "./Auth.styles";
import { SnackbarContext } from "../App";

import RegisterSVG from "../SVGassets/register.svg";
import * as yup from "yup";
const RegisterTextField = props => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <StyledTextField
            {...props}
            {...field}
            size="small"
            helperText={errorText}
            error={!!errorText}
        />
    );
};
const Register = ({ history }) => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: ""
    };
    const { snackbarDispatch } = useContext(SnackbarContext);
    const [errorText, setErrorText] = useState([]);

    const validationSchema = yup.object({
        name: yup
            .string()
            .required()
            .min(3)
            .max(10),
        email: yup
            .string()
            .required()
            .email(),
        phone: yup
            .string()
            .matches(/^(98)([0-9]{8})$/, "Enter a valid number")
            .required(),
        password: yup
            .string()
            .required()
            .min(8),
        password_confirmation: yup
            .string()
            .required()
            .oneOf([yup.ref("password"), null], "Passwords must match")
    });

    const onSubmitHandler = (data, { setSubmitting }) => {
        axios
            .post("/api/register", data)
            .then(() => {
                setSubmitting(false);
                history.push("/login");
                snackbarDispatch({
                    type: "success",
                    message: "Successfully registered"
                });
            })
            .catch(error => {
                console.log(error);
                setSubmitting(false);
                let e = Array();
                const errMessage = Object.values(error.response.data.errors);

                for (let i = 0; i < errMessage.length; i++) {
                    e.push(errMessage[i][0]);
                }
                setErrorText(e);
            });
    };

    return (
        <RegisterWrapper>
            <div className="svg">
                <img src={RegisterSVG} alt="register svg" />
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
            >
                {({ isSubmitting }) => (
                    <Form className="login-form">
                        <div className="form-title">
                            <div className="title-text">Register</div>
                        </div>
                        <div className="error-text">
                            {errorText.map(err => (
                                <div>{err}</div>
                            ))}
                        </div>
                        <div>
                            <RegisterTextField name="name" label="Username" />
                        </div>
                        <div>
                            <RegisterTextField name="email" label="E-mail" />
                        </div>
                        <div>
                            <RegisterTextField name="phone" label="Phone" />
                        </div>
                        <div>
                            <RegisterTextField
                                name="password"
                                label="Password"
                                type="password"
                            />
                        </div>
                        <div>
                            <RegisterTextField
                                name="password_confirmation"
                                label="Re-type Password"
                                type="password"
                            />
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                            className="register-button"
                        >
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </RegisterWrapper>
    );
};

export default withRouter(Register);
