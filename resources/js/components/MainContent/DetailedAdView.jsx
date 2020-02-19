import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeatiledAdView = () => {
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`/api/product/${id}`)
			.then(response => console.log(response.data.data));
	}, []);
	return <div>{id}</div>;
};

export default DeatiledAdView;
