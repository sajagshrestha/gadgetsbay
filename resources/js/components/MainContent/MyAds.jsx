import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";

const MyAds = () => {
    const [ads, setAds] = useState([]);
    const { globalToken } = useContext(UserContext);
    useEffect(() => {
        axios
            .get("/api/user/products", {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                setAds(response.data.data);
            })
            .catch(error => console.log(error));
    }, [ads.length]);

    const deleteAd = id => {
        axios
            .delete(`/api/product/${id}`, globalToken)
            .then(response => {
                const newAds = ads.filter(() => {
                    ad => ad.id !== response.data.data.id;
                });
                setAds(newAds);
            })
            .catch(error => console.log(error));
    };
    return (
        <div>
            {ads.map(Ad => (
                <div key={Ad.id}>
                    <li>{Ad.title}</li>
                    <button onClick={() => deleteAd(Ad.id)}>delete</button>
                </div>
            ))}
        </div>
    );
};
export default MyAds;
