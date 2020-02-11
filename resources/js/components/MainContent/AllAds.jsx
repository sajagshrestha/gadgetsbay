import React, { useEffect, useState } from "react";
import axios from "axios";
import Ad from "./Ad.jsx";
import "./AllAds.css";

const AllAds = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get("/api/products").then(response => {
            setPost(response.data.data);
<<<<<<< HEAD

=======
            consolposts.ide.log(response);
>>>>>>> product api changes and fixes
        });
    }, []);

    return (
        <div className="ads-section">
            {posts.map(post => (
                <Ad post={post} key={post.id} />
            ))}
        </div>
    );
};

export default AllAds;
