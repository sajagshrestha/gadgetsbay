 import React from "react";
import axios from "axios";

const Register = () => {
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const onSubmitHandler = event => {
        event.preventDefault();
        axios
            .post("/api/register", values)
            .then(() => {
                console.log("success");
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
    return (
        <form onSubmit={onSubmitHandler} className="container">
            <label htmlFor="">name</label>
            <input
                className="form-control"
                type="text"
                name="name"
                value={values.name}
                onChange={onChangeHandler}
            />
            <label htmlFor="">email</label>
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
