import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";

const MyAds = () => {
    const [Ad, setAd] = useState({});
    const { globalToken } = useContext(UserContext);
    useEffect(() => {
        axios
            .get("/api/user/products", globalToken)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    });
    return <div>my ads</div>;
};
export default MyAds;
