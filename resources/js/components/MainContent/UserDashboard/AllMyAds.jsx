import React from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import { Tooltip, Fab } from "@material-ui/core";

import styled from "styled-components";
const MyFab = styled(Fab)`
    && {
        background-color: ${props => props.mycolor};
        &:hover {
            background-color: ${props => props.mycolorhover};
        }
    }
`;
const TooltipTitle = ({ title }) => {
    return <h1 style={{ fontSize: "0.8rem" }}>{title}</h1>;
};
const AllMyAds = ({ ads, confirmDeleteHandler }) => {
    return (
        <>
            {ads.map(ad => (
                <div key={ad.id} className="my-ads">
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
