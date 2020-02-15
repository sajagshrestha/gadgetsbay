import React from "react";
import "./Ad.css";
const Ad = ({ post }) => {
    return (
        <div class="product-wrapper">
        <div class="image-wrapper">
            <div class="image">
                <img src="mac.jpg" alt="">
            </div>
        </div>
        <div class="product-detail">
            <div class="title-wrap">
                Mac Book Pro
            </div>
            <div class="specification">
                <ul class="specification-list">
                    <li class="specification-list-items">
                        <div class="attribute">Front Camera:</div>
                         <div class="value">2MP</div>
                    </li>
                    <li class="specification-list-items">
                        <div class="attribute">Back Camera:</div>
                         <div class="value">5Mp</div>
                    </li>
                    <li class="specification-list-items">
                        <div class="attribute">RAM:</div>
                         <div class="value">2GB</div>
                    </li>
                    <li class="specification-list-items">
                        <div class="attribute">Internal Storage:</div>
                         <div class="value">8GB</div>
                    </li>
                    
                </ul>
            </div>
            <div class="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur velit explicabo earum exercitationem.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus maxime consequuntur velit explicabo earum exercitationem.
                
            </div>
            <div class="posted-on">
                <div class="attribute">Posted on :</div> 2019-12-12
            </div>
        </div>
        <div class="seller-price">
          <div class="seller-info">
              <ul>
                    <li>
                      <div class="attribute">Seller:</div>
                      <div class="value">Purushottam Shrestha</div>
                    </li>
                    <li>
                      <div class="attribute">Location:</div>
                      <div class="value">Purushottam Shrestha</div>
                    </li>
                    
              </ul>
          </div>
          <div class="price">
            <div>RS 8000</div>
            <div>Brand new</div>
          </div>
        </div>

    );
};

export default Ad;
