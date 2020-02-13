import React, { useEffect, useState } from "react";
import axios from "axios";
import Ad from "./Ad.jsx";
import "./AllAds.css";
import FeaturedProduct from "./FeaturedProduct";

const AllAds = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get("/api/products").then(response => {
            console.log(response.data.data)
            setPost(response.data.data);
        });
    }, []);
    // return (
    //     <div className="products-section">
    //         {posts.map(post => (
    //             <Ad post={post} key={post.id} />
    //         ))}
    //     </div>
    // );

    return (

        <FeaturedProduct />

        );
};

export default AllAds;
