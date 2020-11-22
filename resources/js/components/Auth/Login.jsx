import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AnimateContext } from "../App";
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
    const { pageTransition, pageVariants } = useContext(AnimateContext);
    const { user, dispatch } = React.useContext(UserContext);
    const initialValues = {
        email: "",
        password: ""
    };
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

    const onSubmitHandler = data => {
        axios
            .post("/api/login", data)
            .then(res => {
                console.log(res);

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
                alert("failed");
                console.log(error);
            });
    };

    if (user.isLoggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <LoginWrapper>
                <div className="svg">
                    <img src={LoginSvg} alt="login svg" />
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={data => onSubmitHandler(data)}
                >
                    {({ values, errors }) => (
                        <Form className="login-form">
                            <div className="form-title">Login</div>
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
                            >
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
            </LoginWrapper>
            {/* <form onSubmit={onSubmitHandler} className="container mt-5">
                <label htmlFor="">Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChangeHandler}
                />
                <label htmlFor="">Password</label>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChangeHandler}
                />

                <button type="submit" className="btn btn-success mt-4">
                    Login
                </button>
            </form> */}
        </motion.div>
    );
};

export default Login;
