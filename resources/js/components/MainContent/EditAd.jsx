import React, { useState, useEffect, createContext } from "react";
import AdForm from "../Layouts/AdForm";
import { useParams } from "react-router-dom";

const EditAd = () => {
    const { id } = useParams();
    const [editValues, setEditValues] = useState({
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
    useEffect(() => {
        axios.get(`/api/product/${id}`).then(response => {
            const res = response.data.data;
            setEditValues({
                title: res.title,
                description: res.description,
                price: res.price,
                expiresIn: res.expiresIn,
                negotiable: res.negotiable,
                condition: res.condition,
                usedFor: res.usedFor,
                frontCamera: res.FrontCamera,
                backCamera: res.backCamera,
                RAM: res.RAM,
                internalStorage: res.internalStorage
            });
        });
    }, []);
    return (
        <div>
            <AdForm editValues={editValues} id={id} />
        </div>
    );
};
export default EditAd;
