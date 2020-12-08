import React, { useEffect, useState } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
const SoldAds = ({ ads }) => {
    const [soldAds, setSoldAds] = useState([]);
    useEffect(() => {
        let filteredAds = ads.filter(ad => ad.status === 2);

        setSoldAds(filteredAds);
    }, [soldAds.length, ads]);
    return (
        <>
            {soldAds.map(ad => (
                <MiniAdCard product={ad} key={ad.id} />
            ))}
        </>
    );
};

export default SoldAds;
