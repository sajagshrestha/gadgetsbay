import React, { useEffect, useState, useContext } from "react";
import MiniAdCard from "../Ads/MiniAdCard";
import axios from "axios";
import { SnackbarContext } from "../../App";
import { LoadingSpinner } from "../../App.styles";
import { CircularProgress } from "@material-ui/core";
const FeaturedProduct = ({ url }) => {
    const [products, setProduct] = useState([]);
    const { snackbarDispatch } = useContext(SnackbarContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`/api/${url}`)
            .then(response => {
                setProduct(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                snackbarDispatch({ type: "error" });
            });
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingSpinner loaderHeight="350px">
                    <CircularProgress />
                </LoadingSpinner>
            ) : (
                products.map(product => (
                    <MiniAdCard product={product} key={product.id} />
                ))
            )}
        </>
    );
};

export default FeaturedProduct;
