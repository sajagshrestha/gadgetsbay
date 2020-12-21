import React, { useEffect, useState } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import { Tooltip } from "@material-ui/core";
import { MyFab } from "./UserDashboard.styles";
import { TooltipTitle } from "./AllMyAds";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
const ExpiredAds = ({ ads, confirmDeleteHandler }) => {
    const [expiredAds, setExpiredAds] = useState([]);
    useEffect(() => {
        let filteredAds = ads.filter(ad => ad.expired === true);

        setExpiredAds(filteredAds);
    }, [expiredAds.length, ads]);
    return (
        <>
            {expiredAds.map(ad => (
                <div key={ad.id}>
                    <MiniAdCard product={ad} type="myAds" />
                    <div className="icons" style={{ justifyContent: "center" }}>
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
export default ExpiredAds;
