import React,{useState} from "react";
import "./Ad.css";
const Ad = ({ post }) => {
    return (
        <div className="product-wrapper">
            <div className="image-wrapper">
                <div className="image">
                    <img src={`storage/images/${post.imageName}`} alt="" />
                </div>
            </div>
            <div className="product-detail">
                <div className="title-wrap">{post.title}</div>
                <div className="specification">
                    <ul className="specification-list">
                        <li className="specification-list-items">
                            <div className="attribute">Front Camera:</div>
                            <div className="value">{post.mobile.frontCamera}</div>
                        </li>
                        <li className="specification-list-items">
                            <div className="attribute">Back Camera:</div>
                            <div className="value">5Mp</div>
                        </li>
                        <li className="specification-list-items">
                            <div className="attribute">RAM:</div>
                            <div className="value">2GB</div>
                        </li>
                        <li className="specification-list-items">
                            <div className="attribute">Internal Storage:</div>
                            <div className="value">8GB</div>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus maxime consequuntur velit explicabo earum
                    exercitationem. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Natus maxime consequuntur velit explicabo
                    earum exercitationem.
                </div>
                <div className="posted-on">
                    <div className="attribute">Posted on :</div> 2019-12-12
                </div>
            </div>
            <div className="seller-price">
                <div className="seller-info">
                    <ul>
                        <li>
                            <div className="attribute">Seller:</div>
                            <div className="value">Purushottam Shrestha</div>
                        </li>
                        <li>
                            <div className="attribute">Location:</div>
                            <div className="value">Purushottam Shrestha</div>
                        </li>
                    </ul>
                </div>
                <div className="price">
                    <div>RS 8000</div>
                    <div>Brand new</div>
                </div>
            </div>
        </div>
    );
};

export default Ad;
