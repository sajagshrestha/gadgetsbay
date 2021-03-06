import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../comment/Comment";
import { UserContext } from "../App";
import { SnackbarContext } from "../../App";

const DeatiledAdView = () => {
    const [ad, setAd] = useState({});
    const { id } = useParams();
    const { globalToken } = useContext(UserContext);
    const { snackbarDispatch } = useContext(SnackbarContext);

    useEffect(() => {
        //for not incrementing view count when the owner views the adz
        if (localStorage.getItem("user")) {
            axios
                .get(`/api/product/${id}`, {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("user")).token
                        }`
                    }
                })
                .then(response => {
                    setAd(response.data.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                    snackbarDispatch({type:"error"});

                });
        } else {
            axios
                .get(`/api/product/${id}`)
                .then(response => {
                    setAd(response.data.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                    snackbarDispatch({type:"error"});

                });
        }
    }, []);

    const displayComments = ad => {
        if (ad.id) {
            return <Comment ad_id={ad.id} />;
        }
    };
    return (
        <div>
            <div>{ad.title}</div>
            {displayComments(ad)}
        </div>
    );
};

export default DeatiledAdView;
