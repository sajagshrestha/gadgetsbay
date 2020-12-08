import React, { useEffect, useState } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import { Tooltip, Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
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

const ActiveAds = ({ ads, onEditHandler, confirmDeleteHandler }) => {
    const [activeAds, setActiveAds] = useState([]);

    useEffect(() => {
        let filteredAds = ads.filter(ad => ad.status === 1);
        setActiveAds(filteredAds);
    }, [ads]);

    return (
        <>
            {activeAds.map(ad => (
                <div key={ad.id} className="my-ads">
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
