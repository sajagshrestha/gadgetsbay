import React, { useEffect, useContext } from "react";
import "./Home.css";
import { UserContext } from "../App";
import AllAds from "./AllAds";
const Home = () => {
	const { setHome } = useContext(UserContext);
	useEffect(() => {
		setHome(true);
		return () => setHome(false);
	}, []);
	return (
		<div>
			<div className="hero-section"></div>
			<AllAds />
		</div>
	);
};

export default Home;
