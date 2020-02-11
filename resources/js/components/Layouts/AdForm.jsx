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
        frontCamera:"",
=
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
<<<<<<< HEAD
        axios
            .post("/api/product", values)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        setValues({
            title: "",
            description: "",
            price: ""
        });
=======
        // axios
        //     .post("/api/product", fd)
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err));
        // setValues({
        //     title: "",
        //     description: "",
        //     price: ""
        // });
>>>>>>> form fields added
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
<<<<<<< HEAD
                                <div className="form-group row">
=======
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
>>>>>>> form fields added
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
<<<<<<< HEAD
                        <input type="radio" name="negotiable" value="yes"  onChange={onChangeHandler} />Yes
                        <input type="radio" name="negotiable" value="fixed price"  onChange={onChangeHandler}/>Fixed Price
=======
                        <input type="radio" name="negotiable" value="yes" id="negotiable" onChange={onChangeHandler} />Yes
                        <input type="radio" name="negotiable" value="fixed price" id="negotiable" onChange={onChangeHandler}/>Fixed Price
>>>>>>> form fields added
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
<<<<<<< HEAD
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
                    <label htmlFor="frontCamera" className="col-sm-2 col-form-label">
                        Front Camera
                    </label>
                    <div className="col-sm-10">
                        <select name="frontCamera" id="frontCamera"  className="form-control" 
                        value={values.frontCamera} onChange={onChangeHandler} >
                            <option value="" defaultValue hidden></option>
                            <option value="none">None</option>
                            <option value="1MP">1MP</option>
                            <option value="2MP">2MP</option>
                            <option value="3MP">3MP</option>
                            <option value="5MP">5MP</option>
                            <option value="10MP">10MP</option>
                            <option value="20MP">20MP</option>
                            <option value="More than 20MP">More than 20MP</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="backCamera" className="col-sm-2 col-form-label">
                        Back Camera
                    </label>
                    <div className="col-sm-10">
                        <select name="backCamera" id="backCamera"  className="form-control" 
                        value={values.backCamera} onChange={onChangeHandler} >
                            <option value="" defaultValue hidden></option>
                            <option value="none">None</option>
                            <option value="1MP">1MP</option>
                            <option value="2MP">2MP</option>
                            <option value="3MP">3MP</option>
                            <option value="5MP">5MP</option>
                            <option value="10MP">10MP</option>
                            <option value="20MP">20MP</option>
                            <option value="More than 20MP">More than 20MP</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="RAM" className="col-sm-2 col-form-label">
                        RAM
                    </label>
                    <div className="col-sm-10">
                        <select name="RAM" id="RAM"  className="form-control" 
                        value={values.RAM} onChange={onChangeHandler} >
                            <option value="" defaultValue hidden></option>
                            <option value="512MB or less">512MB or less</option>
                            <option value="1GB">1GB</option>
                            <option value="2GB">2GB</option>
                            <option value="4GB">4GB</option>
                            <option value="6GB">6GB</option>
                            <option value="8GB">8GB</option>
                            <option value="More than 8BG">More than 8BG</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="internalStorage" className="col-sm-2 col-form-label">
                        Internal Storage
                    </label>
                    <div className="col-sm-10">
                        <select name="internalStorage" id="internalStorage"  className="form-control" 
                        value={values.internalStorage} onChange={onChangeHandler} >
                            <option value="" defaultValue hidden></option>
                            <option value="1GB">1GB</option>
                            <option value="2GB">2GB</option>
                            <option value="4GB">4GB</option>
                            <option value="8GB">8GB</option>
                            <option value="16GB">16GB</option>
                            <option value="32GB">32GB</option>
                            <option value="128GB">128GB</option>
                            <option value="More than 128GB">More than 128BG</option>
                        </select>
                    </div>
                </div>

=======
                
>>>>>>> form fields added
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Photo</label>
                    <div className="col-sm-10">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="customFile"
                                name = "imageName"
                                onChange={imageHandler}
                            />
                            {/* <label
                                className="custom-file-label"
                                htmlFor="customFile"
                            >
                                {imageUploadName}
                            </label> */}
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
