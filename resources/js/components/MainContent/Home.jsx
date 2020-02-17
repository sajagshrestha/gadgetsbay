import React, { useEffect, useContext } from "react";
import "./Home.css";
import { UserContext } from "../App";

import { withRouter } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";
const Home = ({ history }) => {
	return (
		<div>
			<div className="hero-section-container">
				<div className="hero-section">
					<div className="column-one">
						<div className="title-section">GADGETSBAY</div>
						<div className="subtitle-section">
							CONNECTING BUYERS AND SELLERS ALL OVER NEPAL
						</div>
						<div className="post-ad">
							<button
								onClick={() => history.push("/post")}
								className="post-ad-btn"
							>
								POST AN AD
							</button>
						</div>
					</div>
				</div>
				<div className="column-two"></div>
			</div>
			<div className="featured-products-container">
				<div className="title">Featured Products</div>
				<FeaturedProduct />
			</div>
			<div className="featured-products-container">
				<div className="title">Most Recent</div>
				<FeaturedProduct />
			</div>
		</div>
	);
};

export default withRouter(Home);
