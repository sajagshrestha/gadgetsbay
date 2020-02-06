import React, { useState } from "react";
import "./AdForm.css";
import axios from "axios";
const AdForm = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: ""
    });

    const onChangeHandler = event => {
        setValues({
            ...values,
            [event.target.name]: [event.target.value]
        });
    };

    const onSubmitHandler = event => {
        console.log(values);
        event.preventDefault();
        axios
            .post("/api/product", values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    return (
        <div className="container mt-5 ">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">
                        Title
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Enter title here"
                            value={values.title}
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="description"
                        className="col-sm-2 col-form-label"
                    >
                        Description
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="descrition"
                            placeholder="Enter description here"
                            rows="4"
                            name="description"
                            value={values.description}
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">
                        Price
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            name="price"
                            placeholder="Rs."
                            value={values.price}
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                    Post
                </button>
            </form>
        </div>
    );
};

export default AdForm;
