import React from "react";
import axios from "axios";
const Login = () => {
    const [values, setValues] = React.useState({
        email: "",
        password: ""
    });
    const onSubmitHnadler = event => {
        event.preventDefault();
        console.log(values);
        axios
            .post("/api/login", values)
            .then(res => {
                console.log(res);
                alert("success");
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
        <form onSubmit={onSubmitHnadler} className="container">
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

            <button type="submit" className="btn btn-success mt-4">
                Login
            </button>
        </form>
    );
};

export default Login;
