import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductImageGallery from "./ProductImageGallery";
import { UserContext } from "../../App";
import { DetailedAdViewWrapper, DetailsGrid } from "./Ads.styles";
import Comment from "../../comment/Comment";

const DeatiledAdView = () => {
    const [images, setImages] = useState([]);
    const [ad, setAd] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/product/${id}`).then(response => {
            const res = response.data.data;
            setAd(res);
            const imageArray = res.imageName.map(img => {
                return {
                    original: `/storage/images/${img}`,
                    thumbnail: `/storage/images/${img}`
                };
            });
            setImages(imageArray, ad);
        });
    }, [images.length]);
    return (
        <div>
            <DetailedAdViewWrapper>
                <ProductImageGallery
                    images={images}
                    className="product-image-gallery"
                />

                <div className="product-info-section">
                    <div className="product-title">{ad.title}</div>
                    <DetailsGrid>
                        <div className="title">Product Details</div>
                        <div className="grid-items">
                            Price:{" "}
                            <span className="product-price">
                                Rs. {ad.price}
                            </span>
                        </div>
                        <div className="grid-items">
                            Condition: {ad.condition} (Used for {ad.usedFor}{" "}
                            months)
                        </div>
                        <div className="grid-items">
                            Negotiable: {ad.negotiable}
                        </div>
                    </DetailsGrid>
                    {ad.user ? (
                        <DetailsGrid>
                            <div className="title">Seller Information</div>
                            <div className="grid-items">
                                Name: {ad.user.name}
                            </div>
                            <div className="grid-items">
                                Phone: {ad.user.phone}
                            </div>
                            <div className="grid-items">
                                Email: {ad.user.email}
                            </div>
                            <div className="grid-items">
                                Location: {ad.location}
                            </div>
                        </DetailsGrid>
                    ) : (
                        ""
                    )}

                    {ad.mobile ? (
                        <DetailsGrid>
                            <div className="title">Specifications</div>
                            <div className="grid-items">
                                RAM: {ad.mobile.RAM}
                            </div>
                            <div className="grid-items">
                                Storage: {ad.mobile.internalStorage}
                            </div>
                            <div className="grid-items">
                                Front Camera: {ad.mobile.frontCamera}
                            </div>
                            <div className="grid-items">
                                Back Camera: {ad.mobile.backCamera}
                            </div>
                        </DetailsGrid>
                    ) : (
                        ""
                    )}
                </div>
            </DetailedAdViewWrapper>
            <div className="product-about-secton">
                <DetailsGrid gridType="about">
                    <div className="title">About this item</div>
                    <div className="grid-items">{ad.description}</div>
                </DetailsGrid>
            </div>
            {ad.id ? <Comment ad_id={ad.id}/> : ''}
        </div>
    );
};

export default DeatiledAdView;
