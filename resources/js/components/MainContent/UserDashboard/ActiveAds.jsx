import React, { useEffect, useState } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import { Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { MyFab } from "./UserDashboard.styles";
import { TooltipTitle } from "./AllMyAds";

const ActiveAds = ({
    ads,
    onEditHandler,
    confirmDeleteHandler,
    markAsSoldHandler
}) => {
    const [activeAds, setActiveAds] = useState([]);

    const removeFromActiveAd = id => {
        setActiveAds(activeAds.filter(ad => ad.id !== id));
    };

    useEffect(() => {
        let filteredAds = ads.filter(ad => ad.status === 1);
        setActiveAds(filteredAds);
    }, [ads]);

    return (
        <>
            {activeAds.map(ad => (
                <div key={ad.id} className="my-products">
                    <MiniAdCard product={ad} type="myAds" />
                    <div className="icons">
                        <Tooltip title={<TooltipTitle title="Edit" />}>
                            <MyFab
                                type="check"
                                size="small"
                                color="primary"
                                mycolor="#1976d2"
                                mycolorhover="#0F59A3"
                                onClick={() => onEditHandler(ad.id)}
                            >
                                <EditIcon />
                            </MyFab>
                        </Tooltip>
                        <Tooltip title={<TooltipTitle title="Delete" />}>
                            <MyFab
                                size="small"
                                color="primary"
                                mycolor="#D21919"
                                mycolorhover="#A30F0F"
                                onClick={() => confirmDeleteHandler(ad.id)}
                            >
                                <DeleteForeverIcon />
                            </MyFab>
                        </Tooltip>
                        <Tooltip title={<TooltipTitle title="Mark as sold" />}>
                            <MyFab
                                type="check"
                                size="small"
                                color="primary"
                                mycolor="#4caf50"
                                mycolorhover="#449647"
                                onClick={() => {
                                    removeFromActiveAd(ad.id);
                                    markAsSoldHandler(ad.id);
                                }}
                            >
                                <CheckIcon />
                            </MyFab>
                        </Tooltip>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ActiveAds;
