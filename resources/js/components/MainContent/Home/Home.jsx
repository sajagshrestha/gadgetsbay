import React from "react";
import { Link, withRouter } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";
import {
    HomeWrapper,
    HeroSection,
    PostAdButton,
    FeaturedProductSection,
    ScrollDownButton
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
                        <PostAdButton
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={() => history.push("/post")}
                        >
                            Post an Ad
                        </PostAdButton>
                        {/* <PostAdButton
                            variant="outlined"
                            color="primary"
                            size="large"
                        >
                            Browse Ads
                        </PostAdButton> */}

                        {/* <PostAddButton color="primary" variant="outlined">
                            Post An Ad
                        </PostAddButton>
                        <PostAddButton color="primary" variant="outlined">
                            Post An Ad
                        </PostAddButton> */}
                    </div>
                </div>
                <div className="scrolldown-section">
                    <ScrollDownButton href="#featured-section">
                        <div className="mouse">
                            <span></span>
                        </div>
                        <div className="arrow">
                            <span></span>
                        </div>
                    </ScrollDownButton>
                </div>
            </HeroSection>
            <FeaturedProductSection id="featured-section">
                <div className="title-section">
                    <div className="title">Featured Products</div>
                    <Link to="/searchResults?title=">SEE ALL</Link>
                </div>
                <div className="featured-products">
                    <FeaturedProduct url="mostviewed" />
                </div>
            </FeaturedProductSection>

            <FeaturedProductSection>
                <div className="title-section">
                    <div className="title">Most Recent</div>
                    <Link to="/searchResults?title=">SEE ALL</Link>
                </div>
                <div className="featured-products">
                    <FeaturedProduct url="latest" />{" "}
                </div>
            </FeaturedProductSection>
        </HomeWrapper>
    );
};

export default withRouter(Home);
