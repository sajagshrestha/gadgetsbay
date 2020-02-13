import React, { PropTypes } from "react";

const HomeAdView = ({ product }) => {
	return (
		<div className="product-container">
			<a href="#">
				<div className="image-wrap">
					<img src={`storage/images/${product.imageName}`} alt="" />
				</div>
				<div className="title-wrap">
					<div className="tite-text">{product.title}</div>
					<div className="price">Rs.{product.price}</div>
					<div className="condition">{product.condition}</div>
				</div>
			</a>
		</div>
	);
};

export default HomeAdView;
