import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AnimateContext } from "../App";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { UserContext } from "../App";
const Login = () => {
    const { pageTransition, pageVariants } = useContext(AnimateContext);
    const { user, dispatch } = React.useContext(UserContext);
    const [values, setValues] = React.useState({
        email: "",
        password: ""
    });

    const onSubmitHandler = event => {
        event.preventDefault();

        axios
            .post("/api/login", values)
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
    const onChangeHandler = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
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
            <form onSubmit={onSubmitHandler} className="container mt-5">
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
            </form>
        </motion.div>
    );
};

export default Login;
