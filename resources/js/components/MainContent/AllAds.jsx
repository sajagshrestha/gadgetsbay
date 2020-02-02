import React, { useEffect, useState } from "react";
import axios from "axios";

const AllAds = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        axios
            .get("./api/products")
            .then(response => {
                setPost(response.data.data);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            From Form
            {posts.map(post => (
                <li key={post.id}>{post.price}</li>
            ))}
        </div>
    );
};

export default AllAds;
