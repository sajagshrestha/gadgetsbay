import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AnimateContext } from "../App";
import { UserContext } from "../App";
import { withRouter } from "react-router-dom";

const MyAds = ({ history }) => {
    const { pageTransition, pageVariants } = useContext(AnimateContext);
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
    const editAd = id => {
        history.push(`/edit/${id}`);
    };
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
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {ads.map(Ad => (
                <div key={Ad.id}>
                    <li>{Ad.title}</li>
                    <button onClick={() => deleteAd(Ad.id)}>delete</button>
                    <button onClick={() => editAd(Ad.id)}>edit</button>
                </div>
            ))}
        </motion.div>
    );
};
export default withRouter(MyAds);
