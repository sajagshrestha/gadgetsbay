import React from "react";
import "./Ad.css";
const Ad = ({ post }) => {
    return (
        <div className="panel">
            <div className="panel-body">
                <div className="main-wrapper">
                    <div className="left-box box">
                        <div className="for-line box">
                            <div className="photo">
                                <img
                                    src={`storage/images/${post.imageName}`}
                                    alt=""
                                    className="ad-photo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="middle-box">
                        <div className="title">{post.title}</div>
                        <div className="specs">
                            RAM: 16GB| Storage: 500Gb| Storage-Type: SSD
                        </div>
                        <div className="description">{post.description}</div>
                        <div className="post-date">Posted on : 2020-02-07</div>
                    </div>
                    <div className="right-box box">
                        <div className="for-line">
                            <div className="seller-info box">
                                Seller Information
                            </div>
                            <div className="price-and-condition box">
                                <div className="price box">{post.price}</div>
                                <div>(Like New)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ad;
