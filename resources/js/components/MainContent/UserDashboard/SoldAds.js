import React, { useEffect, useState } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import { Tooltip } from "@material-ui/core";
import { MyFab } from "./UserDashboard.styles";
import { TooltipTitle } from "./AllMyAds";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ClearIcon from "@material-ui/icons/Clear";

const SoldAds = ({ ads, unmarkHandler, confirmDeleteHandler }) => {
    const [soldAds, setSoldAds] = useState([]);

    const removeFromSoldAd = id => {
        setSoldAds(soldAds.filter(ad => ad.id !== id));
    };

    useEffect(() => {
        let filteredAds = ads.filter(ad => ad.status === 2);

        setSoldAds(filteredAds);
    }, [ads]);
    return (
        <>
            {soldAds.map(ad => (
                <div key={ad.id}>
                    <MiniAdCard product={ad} type="myAds" />
                    <div className="icons">
                        <Tooltip
                            title={<TooltipTitle title="Unmark as sold" />}
                        >
                            <MyFab
                                size="small"
                                color="primary"
                                onClick={() => {
                                    removeFromSoldAd(ad.id);
                                    unmarkHandler(ad.id);
                                }}
                            >
                                <ClearIcon />
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
                    </div>
                </div>
            ))}
        </>
    );
};

export default SoldAds;
