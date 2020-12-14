import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import MainAdCard from "../Ads/MainAdCard";
import {
    AdsAndFilterWrapper,
    AdsWrapper
} from "./SearchResultsAndAllAds.styles";
import Filter from "./Filter";
import axios from "axios";
const SearchResults = () => {
    const { search } = useLocation();
    const query = queryString.parse(search);
    const [searchedPosts, setSearchedPosts] = useState([]);

    useEffect(() => {
        axios.post("/api/filter", query).then(res => {
            setSearchedPosts(res.data.data);
        });
    }, [search]);
    // if (searchedPosts.length === 0) {
    //     return (
    //         <div className="search-result">
    //             <Filter />
    //             No Results Found
    //         </div>
    //     );
    // }
    return (
        <AdsAndFilterWrapper>
            <Filter />
            {searchedPosts.length === 0 ? (
                <AdsWrapper>No results Found</AdsWrapper>
            ) : (
                <AdsWrapper>
                    {searchedPosts.map(post => (
                        // <Ad key={post.id} post={post} />
                        <MainAdCard key={post.id} post={post} />
                    ))}
                </AdsWrapper>
            )}
        </AdsAndFilterWrapper>
    );
};
export default SearchResults;
