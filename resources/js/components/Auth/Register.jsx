import React, { useContext } from "react";
import axios from "axios";

import { Redirect } from "react-router-dom";

const Register = () => {
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    });
    const [redirect, setRedirect] = React.useState(false);
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(values);
        axios
            .post("/api/register", values)
            .then(() => {
                setRedirect(true);
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
    if (redirect) {
        return <Redirect to="login" />;
    }
    return (
        <form onSubmit={onSubmitHandler} className="container mt-5">
            <label htmlFor="">Name</label>
            <input
                className="form-control"
                type="text"
                name="name"
                value={values.name}
                onChange={onChangeHandler}
            />
            <label htmlFor="">Email</label>
            <input
                className="form-control"
                type="email"
                name="email"
                value={values.email}
                onChange={onChangeHandler}
            />
            <label htmlFor="">Phone</label>
            <input
                className="form-control"
                type="text"
                name="phone"
                value={values.phone}
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
            <label htmlFor="">Confirm Password</label>

            <input
                className="form-control"
                type="password"
                name="password_confirmation"
                value={values.password_confirmation}
                onChange={onChangeHandler}
            />
            <button type="submit" className="btn btn-success mt-4">
                Register
            </button>
        </form>


    );
};

export default Register;
