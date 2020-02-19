import React from "react";
import "./HomeAdView.css";
import { Link } from "react-router-dom";
const HomeAdView = ({ product }) => {
	return (
		<Link
			to={`/details/${product.id}/${product.title}`}
			className="product-container"
		>
			<div className="image-wrap">
				<img src={`storage/images/${product.imageName}`} alt="" />
			</div>
			<div className="title-info">
				<div className="title-text">{product.title}</div>
				<div className="price">Rs.{product.price}</div>
				<div className="condition">{product.condition}</div>
			</div>
		</Link>
	);
};

export default HomeAdView;
