import React, { useState, useEffect } from "react";
import AdForm from "../Layouts/AdForm";
import { useParams } from "react-router-dom";
import axios from "axios";
const EditAd = () => {
    const { id } = useParams();
    const [editImages, setEditImages] = useState([]);
    const editValues = {
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
    };
    useEffect(() => {
        axios
            .get(`/api/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                const res = response.data.data;
                editValues.title = res.title;
                editValues.description = res.description;
                editValues.price = res.price;
                editValues.expiresIn = res.expiresIn;
                editValues.negotiable = res.negotiable;
                editValues.condition = res.condition;
                editValues.usedFor = res.usedFor;
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
                });
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
