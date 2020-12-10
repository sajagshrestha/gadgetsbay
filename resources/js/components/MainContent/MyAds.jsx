import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { withRouter } from "react-router-dom";
import UserPanel from "../User Panel/UserPanel";
import { SnackbarContext } from "../../App";
const MyAds = ({ history }) => {
    const [ads, setAds] = useState([]);
    const { globalToken } = useContext(UserContext);
    const { snackbarDispatch } = useContext(SnackbarContext);

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
            .catch(error => {
                console.log(error);
                snackbarDispatch({ type: "error" });
            });
    }, []);
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
            .catch(error => {
                console.log(error);
                snackbarDispatch({ type: "error" });
            });
    };
    return (
        <div>
            <UserPanel history={history}/>

        </div>
    );
};
export default withRouter(MyAds);
