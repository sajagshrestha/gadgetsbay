import React, { useState, useEffect,useContext } from "react";
import AdForm from "../Layouts/AdForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SnackbarContext } from "../App";
import { UserContext } from "../App";


const EditAd = () => {
    const { id } = useParams();
    const [editImages, setEditImages] = useState([]);
    const { globalToken } = useContext(UserContext);
    const { snackbarDispatch } = useContext(SnackbarContext);
    const editValues = {
        title: "",
        description: "",
        price: "",
        expiresIn: "",
        negotiable: "",
        location:"",
        condition: "",
        usedFor: "",
        frontCamera: "",
        backCamera: "",
        RAM: "",
        internalStorage: ""
    };
    useEffect(() => {
        axios
            .get(`/api/product/${id}`, globalToken)
            .then(response => {
                const res = response.data.data;
                editValues.title = res.title;
                editValues.description = res.description;
                editValues.price = res.price;
                editValues.location = res.location;
                editValues.expiresIn = res.expiresIn;
                editValues.negotiable = res.negotiable;
                editValues.condition = res.condition;
                res.usedFor ? editValues.usedFor = res.usedFor : editValues.usedFor = 0;
                editValues.frontCamera = res.mobile.frontCamera;
                editValues.backCamera = res.mobile.backCamera;
                editValues.RAM = res.mobile.RAM;
                editValues.internalStorage = res.mobile.internalStorage;
                getImages(res);
            });
    }, [editImages.length]);
    const getImages = async res => {
        const promises = res.imageName.map(img => {
            return axios
                .get(`/storage/images/${img}`, {
                    responseType: "blob"
                })
                .then(({ data }) => {
                    let file = new File([data], `${img}`);
                    return file;
                })
                .catch(err => {
                    console.log(err);
                    snackbarDispatch({ type: "error" });
                });;
        });
        const images = await Promise.all(promises).then(values => {
            return values;
        });

        setEditImages(images.flat());
    };

    return (
        <div>
            <AdForm editValues={editValues} id={id} editImages={editImages} />
        </div>
    );
};
export default EditAd;
