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
import { CircularProgress } from "@material-ui/core";
import { LoadingSpinner } from "../../App.styles";
const UserDashboard = () => {
    const history = useHistory();
    const { path } = useRouteMatch();
    const [isLoading, setIsLoading] = useState(true);

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

    const markAsSoldHandler = id => {
        axios
            .post(
                `/api/changestatus/${id}`,
                { status: 2 },
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("user")).token
                        }`
                    }
                }
            )
            .then(res => {
                let adsArray = ads;
                const index = ads.findIndex(ad => ad.id === res.data.data.id);
                adsArray[index] = res.data.data;

                setAds(adsArray);

                snackbarDispatch({
                    type: "success",
                    message: "Your ad has been marked as sold"
                });
            })
            .catch(error => {
                console.log(error);
                snackbarDispatch({ type: "error" });
            });
    };
    const unmarkHandler = id => {
        axios
            .post(
                `/api/changestatus/${id}`,
                { status: 1 },
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("user")).token
                        }`
                    }
                }
            )
            .then(res => {
                let adsArray = ads;
                const index = ads.findIndex(ad => ad.id === res.data.data.id);
                adsArray[index] = res.data.data;

                setAds(adsArray);
                snackbarDispatch({
                    type: "success",
                    message: "Your ad has been marked as active"
                });
            })
            .catch(error => {
                console.log(error);
                snackbarDispatch({ type: "error" });
            });
    };
    useEffect(() => {
        {
            setIsLoading(true);
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
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    snackbarDispatch({ type: "error" });
                });
        }
    }, []);
    return (
        <>
            <DashboardNav />
            {isLoading ? (
                <LoadingSpinner loaderHeight="50vh">
                    <CircularProgress />
                </LoadingSpinner>
            ) : (
                <MyAdsWrapper>
                    <div className="featured-products">
                        <Switch>
                            <Route exact path={path}>
                                <ActiveAds
                                    ads={ads}
                                    onEditHandler={onEditHandler}
                                    confirmDeleteHandler={confirmDeleteHandler}
                                    markAsSoldHandler={markAsSoldHandler}
                                />
                            </Route>
                            <Route exact path={`${path}/sold-ads`}>
                                <SoldAds
                                    ads={ads}
                                    unmarkHandler={unmarkHandler}
                                    confirmDeleteHandler={confirmDeleteHandler}
                                />
                            </Route>
                            <Route exact path={`${path}/expired-ads`}>
                                <ExpiredAds
                                    ads={ads}
                                    confirmDeleteHandler={confirmDeleteHandler}
                                />
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
            )}
        </>
    );
};

export default UserDashboard;
