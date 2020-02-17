import React, { PropTypes, useEffect, useState } from "react";
import "./FeaturedProduct.css";
import HomeAdView from "../Layouts/HomeAdView";

const FeaturedProduct = ({ className }) => {
	const [products, setProduct] = useState([]);
	useEffect(() => {
		axios.get("/api/products").then(response => {
			setProduct(response.data.data);
		});
	}, []);

	return (
		<div className="featured-products">
			{products.map(product => (
				<HomeAdView product={product} key={product.id} />
			))}
		</div>
	);
};

export default FeaturedProduct;
