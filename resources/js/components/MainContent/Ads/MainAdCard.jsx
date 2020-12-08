import React from "react";
import { MainAdCardWrapper } from "./Ads.styles";
import { useHistory } from "react-router-dom";
const MainAdCard = ({ post }) => {
    const history = useHistory();
    return (
        <MainAdCardWrapper
            onClick={() => history.push(`/details/${post.id}/${post.title}`)}
        >
            <div className="img-wrapper">
                <img src={`/storage/images/${post.imageName[0]}`} alt="" />
            </div>
            <div className="product-info-wrapper">
                <div className="title">{post.title}</div>
                <div className="specs">
                    {" "}
                    <p>
                        RAM: {post.mobile.RAM} | Storage: {post.mobile.storage}{" "}
                        | Front Camera: {post.mobile.frontCamera} | Back Camera:{" "}
                        {post.mobile.backCamera}
                    </p>
                </div>
                <div className="description">{post.description}</div>
                <div className="seller-info">Seller: {post.user.name}</div>
            </div>
            <div className="price-wrapper">
                <p>Price</p>
                <p className="price">Rs. {post.price}</p>
                <p className="condition">({post.condition})</p>
            </div>
        </MainAdCardWrapper>
    );
};

export default MainAdCard;
