import React from "react";
import { Link } from "react-router-dom";
import { MiniAdCardWrapper } from "./Ads.styles";
const MiniAdCard = ({ product, type }) => {
    return (
        <Link to={`/details/${product.id}/${product.title}`}>
            <MiniAdCardWrapper type={type}>
                <img src={`/storage/images/${product.imageName[0]}`} alt="" />

                <div className="home-title-info">
                    <div className="home-title">{product.title}</div>
                    <div className="home-price">Rs.{product.price}</div>
                    <div className="home-condition">{product.condition}</div>
                </div>
            </MiniAdCardWrapper>
        </Link>
    );
};
export default MiniAdCard;
