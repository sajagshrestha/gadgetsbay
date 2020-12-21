import React from "react";
import { useHistory } from "react-router-dom";
import { MiniAdCardWrapper } from "./Ads.styles";
const MiniAdCard = ({ product, type }) => {
    const history = useHistory();
    return (
        <MiniAdCardWrapper
            type={type}
            onClick={() =>
                history.push(`/details/${product.id}/${product.title}`)
            }
        >
            {/* <Link to={`/details/${product.id}/${product.title}`}> */}
            <img src={`/storage/images/${product.imageName[0]}`} alt="" />

            <div className="home-title-info">
                <div className="home-title">{product.title}</div>
                <div className="home-price">Rs.{product.price}</div>
                <div className="home-condition">{product.condition}</div>
            </div>
            {/* </Link> */}
        </MiniAdCardWrapper>
    );
};
export default MiniAdCard;
