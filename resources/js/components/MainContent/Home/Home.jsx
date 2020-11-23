import React, { useEffect, useContext } from "react";
import { UserContext } from "../../App";

import { withRouter } from "react-router-dom";
import FeaturedProduct from "../FeaturedProduct";
import { HomeWrapper, HeroSection, PostAddButton } from "./Home.styles";
import Illustration from "../../SVGassets/illustration.svg";
import Logo from "../../SVGassets/Logo.svg";
const Home = ({ history }) => {
    return (
        <HomeWrapper>
            <HeroSection>
                <div className="img-section">
                    <img src={Illustration} alt="illustration" />
                </div>
                <div className="title-section">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="secondary-title">
                        A MARKETPLACE FOR BUYING AND SELLING USED GADGETS
                    </div>
                    <div className="post-add-section">
                        <PostAddButton>Post An Ad</PostAddButton>
                    </div>
                </div>
                <div className="scrolldown-section">scrool down</div>
            </HeroSection>
            <div className="featured-products-container width-container">
                <div className="title">Featured Products</div>
                <FeaturedProduct url="mostviewed" />
            </div>
            <div className="featured-products-container width-container">
                <div className="title">Most Recent</div>
                <FeaturedProduct url="latest" />
            </div>
        </HomeWrapper>
    );
};

export default withRouter(Home);
