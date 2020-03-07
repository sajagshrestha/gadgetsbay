import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeatiledAdView = () => {
	const [ad, setAd] = useState({});
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`/api/product/${id}`)
			.then(response => setAd(response.data.data))
			.catch(error => console.log(error));
	}, []);
	return <div>{ad.title}</div>;
};

export default DeatiledAdView;
