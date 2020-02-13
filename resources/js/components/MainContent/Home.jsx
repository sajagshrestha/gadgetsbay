import React, { useEffect, useContext } from "react";
import "./Home.css";
import { UserContext } from "../App";

import { withRouter } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";
const Home = ({ history }) => {
	return (
		<div>
			<div className="hero-section">
				<div className="column-one">
					<div className="title-section">GADGETSBAY</div>
					<div className="subtitle-section">
						CONNECTING BUYERS AND SELLER ALL OVER NEPAL
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
				<div className="column-two"></div>
			</div>
			<div className="featured-products">
				<div className="title-wrap">Featured Ads</div>
				<div className="products">
					<FeaturedProduct />
				</div>
			</div>
			<div className="featured-products">
				<div className="title-wrap">Recently Listed Ads</div>
				<div className="products">
					<FeaturedProduct />
				</div>
			</div>
		</div>
	);
};

export default withRouter(Home);
