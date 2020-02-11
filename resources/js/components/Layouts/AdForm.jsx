import React, { useState } from "react";
import "./AdForm.css";
import axios from "axios";
const AdForm = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: "",
        expiresIn:"",
        negotiable:"",
        condition:"",
        usedFor:"",
        frontCamer:"",
        backCamera:"",
        RAM:"",
        internalStorage:"",
    });
    const [image, setImage] = useState("");
    const [imageUploadName, setImageUploadName] = useState("Chose Photo");

    const onChangeHandler = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    const imageHandler = event => {
        setImageUploadName(event.target.files[0].name);
        setImage(event.target.files[0]);
    };
    const onSubmitHandler = event => {
        console.log(values);
        console.log(image);
        // const fd = new FormData();
        // fd.append("title", values.title);
        // fd.append("description", values.description);
        // fd.append("price", values.price);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        // fd.append("imageName", image);
        event.preventDefault();
        // axios
        //     .post("/api/product", fd)
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err));
        // setValues({
        //     title: "",
        //     description: "",
        //     price: ""
        // });
        // setImageUploadName("Choose Photo");
    };
    return (
        <div className="container mt-5 ">
            <form onSubmit={onSubmitHandler} encType="multipart/form-data">
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
                    <label htmlFor="expiresIn" className="col-sm-2 col-form-label">
                        Expires In
                    </label>
                    <div className="col-sm-10">
                        <select name="expiresIn" id="expiresIn"  className="form-control" 
                        value={values.expiresIn} onChange={onChangeHandler} >
                            <option value="" defaultValue hidden></option>
                            <option value="14">2 Weeks</option>
                            <option value="30">1 Month</option>
                            <option value="60">2 Months</option>
                            <option value="90">3 Months</option>
                            <option value="120">4 Months</option>
                        </select>
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

                <div className="form-group row">
                    <label htmlFor="negotiable" className="col-sm-2 col-form-label">
                        Negotiable
                    </label>
                    <div className="col-sm-10">
                        <input type="radio" name="negotiable" value="yes" id="negotiable" onChange={onChangeHandler} />Yes
                        <input type="radio" name="negotiable" value="fixed price" id="negotiable" onChange={onChangeHandler}/>Fixed Price
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="condition" className="col-sm-2 col-form-label">
                        Condition
                    </label>
                    <div className="col-sm-10">
                        <input type="radio" name="condition" value="Brand New(not used)" onChange={onChangeHandler} />Brand New(not used)
                        <input type="radio" name="condition" value="Like New(used few times)" onChange={onChangeHandler}/>Like New(used few times)
                        <input type="radio" name="condition" value="Excellent" onChange={onChangeHandler}/>Excellent
                        <input type="radio" name="condition" value="Good/Fair" onChange={onChangeHandler}/>Good/Fair
                        <input type="radio" name="condition" value="Not Working" onChange={onChangeHandler}/>Not Working
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="usedFor" className="col-sm-2 col-form-label">
                        Used For(in months)
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="usedFor"
                            name="usedFor"
                            value={values.usedFor}
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Photo</label>
                    <div className="col-sm-10">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="customFile"
                                onChange={imageHandler}
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="customFile"
                            >
                                {imageUploadName}
                            </label>
                        </div>
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
