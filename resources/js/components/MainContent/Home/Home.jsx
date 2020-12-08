import React from "react";
import { withRouter } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";
import {
    HomeWrapper,
    HeroSection,
    PostAddButton,
    FeaturedProductSection
} from "./Home.styles";
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
                <div className="scrolldown-section">
                    <a href="#featured-section">Scroll Down</a>
                </div>
            </HeroSection>
            <FeaturedProductSection id="featured-section">
                <div className="title">Featured Products</div>
                <div className="featured-products">
                    <FeaturedProduct url="mostviewed" />
                </div>
            </FeaturedProductSection>

            <FeaturedProductSection>
                <div className="title">Most Recent</div>
                <div className="featured-products">
                    <FeaturedProduct url="latest" />{" "}
                </div>
            </FeaturedProductSection>
        </HomeWrapper>
    );
};

export default withRouter(Home);
