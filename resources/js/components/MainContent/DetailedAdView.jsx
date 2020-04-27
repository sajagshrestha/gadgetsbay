import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../App";


const DeatiledAdView = () => {
	const [ad, setAd] = useState({});
	const { id } = useParams();
    const { globalToken } = useContext(UserContext);
	useEffect(() => {
		if(localStorage.getItem("user"))
		{
		axios
			.get(`/api/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
			.then(response => {setAd(response.data.data);
				console.log(response.data);})
			.catch(error => console.log(error));
		}
		else{
			axios
			.get(`/api/product/${id}`)
			.then(response => {setAd(response.data.data);
				console.log(response.data);})
			.catch(error => console.log(error));
		}
	}, []);
	// return <div>{ad.title}</div>;
	return <div>lmao</div>
};

export default DeatiledAdView;
