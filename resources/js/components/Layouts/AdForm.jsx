import React, { useState, useContext, useEffect } from "react";
import "./AdForm.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { UserContext } from "../App";

const AdForm = ({ id, editValues, history }) => {
    const { globalToken } = useContext(UserContext);
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: "",
        expiresIn: "",
        negotiable: "",
        condition: "",
        usedFor: "",
        frontCamera: "",
        backCamera: "",
        RAM: "",
        internalStorage: ""
    });
    const [images, setImages] = useState([]);
    const [imageToBeAdded, setImageToBeAdded] = useState({
        name: "Add new Image",
        file: {}
    });
    const [imagesLabel, setImagesLabel] = useState("Select one or more images");

    useEffect(() => {
        console.log(images);
        if (editValues) {
            setValues(editValues);
        }
    }, [editValues]);
    const onChangeHandler = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    const imageHandler = event => {
        const imagesObj = [];
        const imagesArray = [];
        imagesObj.push(event.target.files);

        for (let i = 0; i < imagesObj[0].length; i++) {
            imagesArray.push(imagesObj[0][i]);
        }
        console.log(imagesArray);

        setImages(imagesArray);
        setImagesLabel(`${imagesArray.length} images selected`);
    };
    const removeImage = img => {
        const newImagesArray = images.filter(i => i !== img);
        setImages(newImagesArray);

        setImagesLabel(
            newImagesArray.length === 0
                ? "Select one or multiple images"
                : `${newImagesArray.length} images selected`
        );
    };
    const setPrimary = img => {
        const newImageArray = images.filter(i => i !== img);
        newImageArray.unshift(img);
        setImages(newImageArray);
    };
    const handleAddImage = event => {
        setImageToBeAdded({
            name: event.target.files[0].name,
            file: event.target.files[0]
        });
    };
    const addNewImage = () => {
        const newImages = images.filter(i => i.name !== "yeet");
        newImages.push(imageToBeAdded.file);
        setImages(newImages);
        setImageToBeAdded({ name: "Add new Image" });
    };
    const onSubmitHandler = event => {
        const fd = new FormData();
        fd.append("title", values.title);
        fd.append("description", values.description);
        fd.append("price", values.price);
        fd.append("imageName", images);
        fd.append("expiresIn", values.expiresIn);
        fd.append("negotiable", values.negotiable);
        fd.append("condition", values.condition);
        fd.append("usedFor", values.usedFor);
        fd.append("frontCamera", values.frontCamera);
        fd.append("backCamera", values.backCamera);
        fd.append("RAM", values.RAM);
        fd.append("internalStorage", values.internalStorage);
        event.preventDefault();
        if (editValues) {
            axios
                .put(`/api/product/${id}`, fd, globalToken)
                .then(history.push("/myAds"))
                .catch(err => console.log(err));
        } else {
            axios
                .post("/api/product", fd, globalToken)
                .then(history.push("/"))
                .catch(err => console.log(err));
        }

        setValues({
            title: "",
            description: "",
            price: "",
            expiresIn: "",
            negotiable: "",
            condition: "",
            usedFor: "",
            frontCamera: "",
            backCamera: "",
            RAM: "",
            internalStorage: ""
        });
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
                    <label
                        htmlFor="expiresIn"
                        className="col-sm-2 col-form-label"
                    >
                        Expires In
                    </label>
                    <div className="col-sm-10">
                        <select
                            name="expiresIn"
                            id="expiresIn"
                            className="form-control"
                            value={values.expiresIn}
                            onChange={onChangeHandler}
                        >
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
                    <label
                        htmlFor="negotiable"
                        className="col-sm-2 col-form-label"
                    >
                        Negotiable
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="radio"
                            name="negotiable"
                            value="yes"
                            onChange={onChangeHandler}
                            checked={values.negotiable === "yes" ? true : false}
                        />
                        Yes
                        <input
                            type="radio"
                            name="negotiable"
                            value="fixed price"
                            onChange={onChangeHandler}
                            checked={
                                values.negotiable === "fixed price"
                                    ? true
                                    : false
                            }
                        />
                        Fixed Price
                    </div>
                </div>

                <div className="form-group row">
                    <label
                        htmlFor="condition"
                        className="col-sm-2 col-form-label"
                    >
                        Condition
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="radio"
                            name="condition"
                            value="Brand New"
                            onChange={onChangeHandler}
                            checked={
                                values.condition === "Brand New" ? true : false
                            }
                        />
                        Brand New(not used)
                        <input
                            type="radio"
                            name="condition"
                            value="Like New"
                            onChange={onChangeHandler}
                            checked={
                                values.condition === "Like New" ? true : false
                            }
                        />
                        Like New(used few times)
                        <input
                            type="radio"
                            name="condition"
                            value="Excellent"
                            onChange={onChangeHandler}
                            checked={
                                values.condition === "Excellent" ? true : false
                            }
                        />
                        Excellent
                        <input
                            type="radio"
                            name="condition"
                            value="Good/Fair"
                            onChange={onChangeHandler}
                            checked={
                                values.condition === "Good/Fair" ? true : false
                            }
                        />
                        Good/Fair
                        <input
                            type="radio"
                            name="condition"
                            value="Not Working"
                            onChange={onChangeHandler}
                            checked={
                                values.condition === "Not Working"
                                    ? true
                                    : false
                            }
                        />
                        Not Working
                    </div>
                </div>

                <div className="form-group row">
                    <label
                        htmlFor="usedFor"
                        className="col-sm-2 col-form-label"
                    >
                        Used For
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="usedFor"
                            name="usedFor"
                            placeholder="in months"
                            value={values.usedFor}
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label
                        htmlFor="frontCamera"
                        className="col-sm-2 col-form-label"
                    >
                        Front Camera
                    </label>
                    <div className="col-sm-10">
                        <select
                            name="frontCamera"
                            id="frontCamera"
                            className="form-control"
                            value={values.frontCamera}
                            onChange={onChangeHandler}
                        >
                            <option value="" defaultValue hidden></option>
                            <option value="none">None</option>
                            <option value="1MP">1MP</option>
                            <option value="2MP">2MP</option>
                            <option value="3MP">3MP</option>
                            <option value="5MP">5MP</option>
                            <option value="10MP">10MP</option>
                            <option value="20MP">20MP</option>
                            <option value="More than 20MP">
                                More than 20MP
                            </option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label
                        htmlFor="backCamera"
                        className="col-sm-2 col-form-label"
                    >
                        Back Camera
                    </label>
                    <div className="col-sm-10">
                        <select
                            name="backCamera"
                            id="backCamera"
                            className="form-control"
                            value={values.backCamera}
                            onChange={onChangeHandler}
                        >
                            <option value="" defaultValue hidden></option>
                            <option value="none">None</option>
                            <option value="1MP">1MP</option>
                            <option value="2MP">2MP</option>
                            <option value="3MP">3MP</option>
                            <option value="5MP">5MP</option>
                            <option value="10MP">10MP</option>
                            <option value="20MP">20MP</option>
                            <option value="More than 20MP">
                                More than 20MP
                            </option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="RAM" className="col-sm-2 col-form-label">
                        RAM
                    </label>
                    <div className="col-sm-10">
                        <select
                            name="RAM"
                            id="RAM"
                            className="form-control"
                            value={values.RAM}
                            onChange={onChangeHandler}
                        >
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
                    <label
                        htmlFor="internalStorage"
                        className="col-sm-2 col-form-label"
                    >
                        Internal Storage
                    </label>
                    <div className="col-sm-10">
                        <select
                            name="internalStorage"
                            id="internalStorage"
                            className="form-control"
                            value={values.internalStorage}
                            onChange={onChangeHandler}
                        >
                            <option value="" defaultValue hidden></option>
                            <option value="1GB">1GB</option>
                            <option value="2GB">2GB</option>
                            <option value="4GB">4GB</option>
                            <option value="8GB">8GB</option>
                            <option value="16GB">16GB</option>
                            <option value="32GB">32GB</option>
                            <option value="128GB">128GB</option>
                            <option value="More than 128GB">
                                More than 128BG
                            </option>
                        </select>
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
                                name="imageName"
                                onChange={imageHandler}
                                multiple
                                accept="image/*"
                            />
                            {
                                <label
                                    className="custom-file-label"
                                    htmlFor="customFile"
                                >
                                    {imagesLabel}
                                </label>
                            }
                        </div>
                    </div>
                </div>
                {images.length !== 0 ? (
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Select primary Photo
                        </label>
                        <div className="col-sm-10 images-container">
                            <div className="primary-image-container">
                                <img
                                    src={URL.createObjectURL(images[0])}
                                    alt="primary image"
                                    className="primary-image"
                                />
                            </div>
                            <div className="preview-plus-add">
                                <div className="preview-image-container">
                                    {images.map((img, index) => (
                                        <div key={index}>
                                            <img
                                                src={URL.createObjectURL(img)}
                                                className="preview-images"
                                                onClick={() => setPrimary(img)}
                                            />
                                            <input
                                                type="button"
                                                onClick={() => removeImage(img)}
                                                value="X"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="add-more">
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile02"
                                            onChange={handleAddImage}
                                        />
                                        <label
                                            className="custom-file-label my-label"
                                            htmlFor="inputGroupFile02"
                                        >
                                            {imageToBeAdded.name}
                                        </label>
                                    </div>
                                    <input
                                        type="button"
                                        onClick={() => addNewImage()}
                                        disabled={
                                            imageToBeAdded.name ===
                                            "Add new Image"
                                                ? true
                                                : false
                                        }
                                        value="Add"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <button type="submit" className="btn btn-primary mt-4">
                    {editValues ? "edit" : "post"}
                </button>
            </form>
        </div>
    );
};

export default withRouter(AdForm);
