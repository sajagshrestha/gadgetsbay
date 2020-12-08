import React, { useEffect, useState } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import axios from "axios";
const FeaturedProduct = ({ url }) => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        axios
            .get(`/api/${url}`)
            .then(response => {
                setProduct(response.data.data);
            })
            .catch(error => console.log(error));
    }, [products.length]);

    return (
        <>
            {products.map(product => (
                <MiniAdCard product={product} key={product.id} />
            ))}
        </>
    );
};

export default FeaturedProduct;
