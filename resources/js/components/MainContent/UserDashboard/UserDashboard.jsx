import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DashboardNav from "./DashboardNav.jsx";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import ActiveAds from "./ActiveAds";
import AllMyAds from "./AllMyAds";
import SoldAds from "./SoldAds";
import ExpiredAds from "./ExpiredAds";
import { MyAdsWrapper } from "./UserDashboard.styles";
import ConfirmDelete from "./ConfirmDelete";
import { SnackbarContext } from "../../App";

const UserDashboard = () => {
    const history = useHistory();
    const { path } = useRouteMatch();

    const [ads, setAds] = useState([]);

    const [openConfirm, setOpenConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const { snackbarDispatch } = useContext(SnackbarContext);
    const confirmDeleteHandler = id => {
        setOpenConfirm(true);
        setDeleteId(id);
    };

    const onEditHandler = id => {
        history.push(`/edit/${id}`);
    };

    const onDeleteHandler = id => {
        axios
            .delete(`/api/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                setAds(ads.filter(ad => ad.id !== response.data.data.id));
                snackbarDispatch({
                    type: "success",
                    message: "Your ad has been deleted successfully"
                });
            })
            .catch(error => {
                console.log(error);
                snackbarDispatch({ type: "error" });
            });
    };

    useEffect(() => {
        {
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
        }
    }, [ads.length]);
    return (
        <>
            <DashboardNav />
            <MyAdsWrapper>
                <div className="featured-products">
                    <Switch>
                        <Route exact path={path}>
                            <ActiveAds
                                ads={ads}
                                onEditHandler={onEditHandler}
                                confirmDeleteHandler={confirmDeleteHandler}
                            />
                        </Route>
                        <Route exact path={`${path}/sold-ads`}>
                            <SoldAds ads={ads} />
                        </Route>
                        <Route exact path={`${path}/expired-ads`}>
                            <ExpiredAds ads={ads} />
                        </Route>
                        <Route exact path={`${path}/all-my-ads`}>
                            <AllMyAds
                                ads={ads}
                                onEditHandler={onEditHandler}
                                confirmDeleteHandler={confirmDeleteHandler}
                            />
                        </Route>
                    </Switch>
                </div>
                <ConfirmDelete
                    open={openConfirm}
                    handleClose={() => setOpenConfirm(false)}
                    id={deleteId}
                    onDeleteHandler={onDeleteHandler}
                />
            </MyAdsWrapper>
        </>
    );
};

export default UserDashboard;
