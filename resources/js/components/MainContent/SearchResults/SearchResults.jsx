import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainAdCard from "../Ads/MainAdCard";
import {
    AdsAndFilterWrapper,
    AdsWrapper
} from "./SearchResultsAndAllAds.styles";
import Filter from "./Filter";
import axios from "axios";
const SearchResults = () => {
    const { title } = useParams();
    const [searchedPosts, setSearchedPosts] = useState([]);
    // axios
    // .post("/api/filter", { title: search })
    // .then(response => {
    //     setSearchedPosts(response.data.data);

    useEffect(() => {
        axios.post("/api/filter", { title: title }).then(res => {
            setSearchedPosts(res.data.data);
        });
        return () => {};
    }, [searchedPosts.length, title]);
    if (searchedPosts.length === 0) {
        return (
            <div className="search-result">
                <Filter />
                No Results Found
            </div>
        );
    }
    return (
        <AdsAndFilterWrapper>
            <Filter />
            <AdsWrapper>
                {searchedPosts.map(post => (
                    // <Ad key={post.id} post={post} />
                    <MainAdCard key={post.id} post={post} />
                ))}
            </AdsWrapper>
        </AdsAndFilterWrapper>
    );
};
export default SearchResults;
