import React from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import { Tooltip } from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { MyFab } from "./UserDashboard.styles";
export const TooltipTitle = ({ title }) => {
    return <h1 style={{ fontSize: "0.8rem" }}>{title}</h1>;
};
const AllMyAds = ({ ads, confirmDeleteHandler }) => {
    return (
        <>
            {ads.map(ad => (
                <div key={ad.id} className="my-products">
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

export default AllMyAds;
