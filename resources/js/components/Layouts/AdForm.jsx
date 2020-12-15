import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import {
    TextField,
    MenuItem,
    Radio,
    FormControlLabel,
    InputLabel,
    Button
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddAPhoto from "@material-ui/icons/AddAPhoto"
import * as yup from "yup";
import { AdFormWrapper, StyledTextField } from "./AdForm.styles";
import { SnackbarContext } from "../App";
import Location from "./Location";
import { UserContext } from "../App";

export const RadioButton = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <FormControlLabel
            {...field}
            control={<Radio />}
            label={label}
            className="RadioButton"
        />
    );
};

const MytextField = props => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <StyledTextField>
            <Field
                {...props}
                {...field}
                variant="outlined"
                fullWidth
                as={TextField}
                size="small"
                helperText={errorText}
                error={!!errorText}
            />
        </StyledTextField>
    );
};

const MyLocationField = props => {
    const [field, meta, helpers] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    const { setValue } = helpers;
    return (
        <StyledTextField>
            <Location updateValue={setValue} meta={meta} />
        </StyledTextField>
    );
};
const AdForm = ({ id, editValues, editImages }) => {
    const { globalToken } = useContext(UserContext);
    const [images, setImages] = useState([]);
    const [imageToBeAdded, setImageToBeAdded] = useState({
        name: "Add new Image",
        file: {}
    });
    const { snackbarDispatch } = useContext(SnackbarContext);
    const [imagesLabel, setImagesLabel] = useState("Select one or more images");
    const initialValues = {
        title: "",
        description: "",
        location: "",
        price: "",
        expiresIn: "",
        negotiable: "",
        condition: "",
        usedFor: "",
        frontCamera: "",
        backCamera: "",
        RAM: "",
        internalStorage: "",
        imageName: []
    };
    const history = useHistory();
    if (editValues) {
        useEffect(() => {
            if (editImages.length !== 0) {
                setImages(editImages);
            }
        }, [editImages.length, editValues]);
    }
    const imageHandler = event => {
        const imagesObj = [];
        const imagesArray = [];
        imagesObj.push(event.target.files);
        if (imagesObj[0].length > 6) {
            alert("You Can only select 6 images");
        } else {
            for (let i = 0; i < imagesObj[0].length; i++) {
                imagesArray.push(imagesObj[0][i]);
            }
            setImages(imagesArray);
            setImagesLabel(`${imagesArray.length} images selected`);
        }
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
        const newImages = [].concat(images);
        newImages.push(imageToBeAdded.file);
        if (newImages.length > 6) {
            alert("You can only upload 6 images");
        } else {
            setImages(newImages);
            setImageToBeAdded({ name: "Add new Image" });
        }
    };

    const onSubmitHandler = (values,action) => {
        let fd = new FormData();
        fd.append("title", values.title);
        fd.append("description", values.description);
        fd.append("price", values.price);
        for (let i = 0; i < images.length; i++) {
            fd.append("imageName[]", images[i]);
        }
        fd.append("location", values.location);
        fd.append("expiresIn", values.expiresIn);
        fd.append("negotiable", values.negotiable);
        fd.append("condition", values.condition);
        fd.append("usedFor", values.usedFor);
        fd.append("frontCamera", values.frontCamera);
        fd.append("backCamera", values.backCamera);
        fd.append("RAM", values.RAM);
        fd.append("internalStorage", values.internalStorage);
        if (editValues) {
            fd.append("_method", "put");
            axios
                .post(`/api/product/${id}`, fd, globalToken)
                .then(res => {
                    history.push(`/details/${res.data.data.id}/${res.data.data.title}`);
                    snackbarDispatch({
                        type: "success",
                        message: "Edit successful"
                    });
                })
                .catch(err => {
                    console.log(err);
                    snackbarDispatch({ type: "error" });
                });
        } else {
            axios
                .post("/api/product", fd, globalToken)
                .then(res => {
                    history.push(`/details/${res.data.data.id}/${res.data.data.title}`);
                    snackbarDispatch({
                        type: "success",
                        message: "Post successful"
                    });
                })
                .catch(err => {
                    console.log(err);
                    snackbarDispatch({ type: "error" });
                    action.setSubmitting(false);
                });
        }
    };

    const validationSchema = yup.object({
        title: yup
            .string()
            .required()
            .min(3),
        description: yup.string(),
        expiresIn: yup.number().required("required"),
        price: yup
            .number()
            .typeError("price must be a number")
            .required()
            .positive()
            .integer("please enter number value"),
        location: yup.string().required(),
        negotiable: yup.string().required("Please select any"),
        condition: yup.string().required("Please select any"),
        usedFor: yup.number().typeError("Please enter a number value"),
        frontCamera: yup.string().required("required"),
        backCamera: yup.string().required("required"),
        RAM: yup.string().required("required"),
        internalStorage: yup.string().required("required")
    });
    return (
        <AdFormWrapper>
            <Formik
                initialValues={editValues ? editValues : initialValues}
                onSubmit={onSubmitHandler}
                validationSchema={validationSchema}
            >
                {({ values, isSubmitting, isValid, dirty, setFieldValue }) => (
                    <Form>
                        {JSON.stringify(values,null,2)}
                        <MytextField name="title" label="Title" />
                        <MytextField
                            name="description"
                            as="textarea"
                            label="Description"
                            multiline
                            rows={3}
                        />

                        <MytextField name="expiresIn" label="Expires in" select>
                            <MenuItem value={14}> 2 Weeks </MenuItem>
                            <MenuItem value={30}> 1 Month </MenuItem>
                            <MenuItem value={60}> 2 Months </MenuItem>
                            <MenuItem value={90}> 3 Months </MenuItem>
                            <MenuItem value={120}> 4 Months </MenuItem>
                        </MytextField>

                        <MytextField name="price" label="Price" />
                        <div>
                            <MyLocationField name="location" />
                        </div>
                        <div>
                            <InputLabel> Negotiable </InputLabel>
                            <RadioButton
                                name="negotiable"
                                type="radio"
                                value="yes"
                                label="Yes"
                            />
                            <RadioButton
                                name="negotiable"
                                type="radio"
                                value="no"
                                label="No"
                            />
                            <div className="error-text">
                                <ErrorMessage name="negotiable" />
                            </div>
                        </div>

                        <div>
                            <InputLabel> Condition </InputLabel>
                            <RadioButton
                                name="condition"
                                value="Brand New"
                                type="radio"
                                label="Brand New"
                            />
                            <RadioButton
                                name="condition"
                                value="Like New"
                                type="radio"
                                label="Like New"
                            />
                            <RadioButton
                                name="condition"
                                value="Excellent"
                                type="radio"
                                label="Excellent"
                            />
                            <RadioButton
                                name="condition"
                                value="Good/Fair"
                                type="radio"
                                label="Good/Fair"
                            />
                            <RadioButton
                                name="condition"
                                value="Not Working"
                                type="radio"
                                label="Not Working"
                            />
                            <div className="error-text">
                                <ErrorMessage name="condition" />
                            </div>
                        </div>

                        <MytextField
                            name="usedFor"
                            label="Used For (in months)"
                        />

                        <MytextField
                            name="frontCamera"
                            select
                            label="Front Camera"
                        >
                            <MenuItem value="none"> None </MenuItem>
                            <MenuItem value="1MP"> 1 MP </MenuItem>
                            <MenuItem value="2MP"> 2 MP </MenuItem>
                            <MenuItem value="3MP"> 3 MP </MenuItem>
                            <MenuItem value="5MP"> 5 MP </MenuItem>
                            <MenuItem value="10MP"> 10 MP </MenuItem>
                            <MenuItem value="20MP"> 20 MP </MenuItem>
                            <MenuItem value="More than 20MP">
                                More than 20 MP
                            </MenuItem>
                        </MytextField>

                        <MytextField
                            name="backCamera"
                            select
                            label="Back Camera"
                        >
                            <MenuItem value="none"> None </MenuItem>
                            <MenuItem value="1MP"> 1 MP </MenuItem>
                            <MenuItem value="2MP"> 2 MP </MenuItem>
                            <MenuItem value="3MP"> 3 MP </MenuItem>
                            <MenuItem value="5MP"> 5 MP </MenuItem>
                            <MenuItem value="10MP"> 10 MP </MenuItem>
                            <MenuItem value="20MP"> 20 MP </MenuItem>
                            <MenuItem value="More than 20MP">
                                More than 20 MP
                            </MenuItem>
                        </MytextField>

                        <MytextField name="RAM" select label="RAM">
                            <MenuItem value="512MB or less">
                                512 MB or less
                            </MenuItem>
                            <MenuItem value="1GB"> 1 GB </MenuItem>
                            <MenuItem value="2GB"> 2 GB </MenuItem>
                            <MenuItem value="4GB"> 4 GB </MenuItem>
                            <MenuItem value="6GB"> 6 GB </MenuItem>
                            <MenuItem value="8GB"> 8 GB </MenuItem>
                            <MenuItem value="More than 8GB">
                                More than 8 GB
                            </MenuItem>
                        </MytextField>

                        <MytextField
                            name="internalStorage"
                            select
                            label="Internal Storage"
                        >
                            <MenuItem value="1GB"> 1 GB </MenuItem>
                            <MenuItem value="2GB"> 2 GB </MenuItem>
                            <MenuItem value="4GB"> 4 GB </MenuItem>
                            <MenuItem value="8GB"> 8 GB </MenuItem>
                            <MenuItem value="16GB"> 16 GB </MenuItem>
                            <MenuItem value="32GB"> 32 GB </MenuItem>
                            <MenuItem value="128GB"> 128 GB </MenuItem>
                            <MenuItem value="More than 128GB">
                                More than 128 GB
                            </MenuItem>
                        </MytextField>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Photo
                            </label>
                            <div className="col-sm-10">
                                <div className="custom-file">
                                    <input
                                        id="customFile"
                                        name="imageName"
                                        type="file"
                                        onChange={imageHandler}
                                        className="custom-file-input"
                                        multiple
                                        hidden
                                        accept="image/*"
                                    />
                                    <label htmlFor="customFile">
                                        <Button
                                            variant="outlined"
                                            component="span"
                                            startIcon={<CloudUploadIcon />}
                                            className="file-upload"
                                        >
                                            Upload
                                        </Button>
                                    </label>

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
                                                        src={URL.createObjectURL(
                                                            img
                                                        )}
                                                        className="preview-images"
                                                        onClick={() =>
                                                            setPrimary(img)
                                                        }
                                                    />
                                                    <IconButton
                                                        onClick={() =>
                                                            removeImage(img)
                                                        }
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
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
                                                    hidden
                                                />
                                                <label
                                                    htmlFor="inputGroupFile02"
                                                    className="custom-file-label my-label"
                                                >
                                                    <Button
                                                        variant="outlined"
                                                        component="span"
                                                        startIcon={
                                                            <CloudUploadIcon />
                                                        }
                                                        className="file-upload"
                                                    >
                                                        {imageToBeAdded.name}
                                                    </Button>
                                                </label>
                                            </div>
                                            {/* <input
                                                type="button"
                                                onClick={() => addNewImage()}
                                                disabled={
                                                    imageToBeAdded.name ===
                                                    "Add new Image"
                                                        ? true
                                                        : false
                                                }
                                                value="Add"
                                            /> */}
                                            <IconButton
                                                onClick={() => addNewImage()}
                                                disabled={
                                                    imageToBeAdded.name ===
                                                    "Add new Image"
                                                        ? true
                                                        : false
                                                }
                                            >
                                                <AddAPhoto />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={editValues ? false : isSubmitting}
                            startIcon={
                                editValues ? <CloudUploadIcon /> : <SaveIcon />
                            }
                            className="ad-form-button"
                        >
                            {editValues ? "Edit" : "Post"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </AdFormWrapper>
    );
};

export default AdForm;
