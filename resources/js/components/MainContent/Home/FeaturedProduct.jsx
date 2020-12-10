import React, { useEffect, useState,useContext } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import axios from "axios";
import { SnackbarContext } from "../../App";
const FeaturedProduct = ({ url }) => {
    const [products, setProduct] = useState([]);
    const { snackbarDispatch } = useContext(SnackbarContext);

    useEffect(() => {
        axios
            .get(`/api/${url}`)
            .then(response => {
                setProduct(response.data.data);
            })
            .catch(error => {
                console.log(error)
                snackbarDispatch({type:"error"});
            });
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
