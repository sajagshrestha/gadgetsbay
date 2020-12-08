import React from "react";
import ImageGallery from "react-image-gallery";
import "./image-gallery.css";

const ProductImageGallery = ({ images }) => {
    return (
        <ImageGallery
            items={images}
            lazyLoad={true}
            slideDuration={100}
            thumbnailPosition="right"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            autoPlay={true}
            useBrowserFullscreen={false}
            infinite={false}
        />
    );
};

export default ProductImageGallery;
