import React, { useEffect, useState } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
const ExpiredAds = ({ ads }) => {
    const [expiredAds, setExpiredAds] = useState([]);
    useEffect(() => {
        let filteredAds = ads.filter(ad => ad.status === 3);

        setExpiredAds(filteredAds);
    }, [expiredAds.length, ads]);
    return (
        <div>
            {expiredAds.map(ad => (
                <MiniAdCard product={ad} key={ad.id} />
            ))}
        </div>
    );
};
export default ExpiredAds;
