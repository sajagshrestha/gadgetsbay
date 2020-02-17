import React from "react";
import "./HomeAdView.css";
const HomeAdView = ({ product }) => {
	return (
		<a href="#" className="product-container">
			<div className="image-wrap">
				<img src={`storage/images/${product.imageName}`} alt="" />
			</div>
			<div className="title-info">
				<div className="title-text">{product.title}</div>
				<div className="price">Rs.{product.price}</div>
				<div className="condition">{product.condition}</div>
			</div>
		</a>
	);
};

export default HomeAdView;
