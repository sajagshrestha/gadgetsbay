import React, { useEffect, useContext } from "react";
import "./Home.css";
import { UserContext } from "../App";

const Home = () => {
	const { setHome } = useContext(UserContext);
	useEffect(() => {
		setHome(true);
		return () => setHome(false);
	}, []);
	return (
		<div>
			<div className="hero-section">
				<div className="column-one">
					<div className="title-section">GADGETSBAY</div>
					<div className="subtitle-section">
						CONNECTING BUYERS AND SELLER ALL OVER NEPAL
					</div>
					<div className="post-ad">
						<button className="post-ad-btn">POST AN AD</button>
					</div>
				</div>
				<div className="column-two"></div>
			</div>
		</div>
	);
};

export default Home;
