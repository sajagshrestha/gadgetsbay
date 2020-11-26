import React, { useEffect, useContext } from "react";
import "./Home.css";
import { UserContext } from "../App";
import { motion } from "framer-motion";
import { AnimateContext } from "../App";
import { withRouter } from "react-router-dom";
import Comment from "../comment/Comment";


import FeaturedProduct from "./FeaturedProduct";
const Home = ({ history }) => {
    const { pageTransition, pageVariants } = useContext(AnimateContext);
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="hero-section-container">
                <div className="hero-section my-body-container">
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

            <Comment ad_id={1}/>

            <div className="featured-products-container width-container">
                <div className="title">Featured Products</div>
                <FeaturedProduct url="mostviewed" />
            </div>
            <div className="featured-products-container width-container">
                <div className="title">Most Recent</div>
                <FeaturedProduct url="latest" />
            </div>
        </motion.div>
    );
};

export default withRouter(Home);
