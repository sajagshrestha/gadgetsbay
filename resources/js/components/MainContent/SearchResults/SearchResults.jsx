import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import MainAdCard from "../Ads/MainAdCard";
import {
    AdsAndFilterWrapper,
    AdsWrapper
} from "./SearchResultsAndAllAds.styles";
import { LoadingSpinner } from "../../App.styles";
import Filter from "./Filter";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const SearchResults = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { search } = useLocation();
    const query = queryString.parse(search);
    const [searchedPosts, setSearchedPosts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.post("/api/filter", query).then(res => {
            setSearchedPosts(res.data.data);
            setIsLoading(false);
        });
    }, [search]);

    return (
        <AdsAndFilterWrapper>
            <Filter />
            <AdsWrapper>
                {isLoading ? (
                    <LoadingSpinner loaderHeight="50vh">
                        <CircularProgress />
                    </LoadingSpinner>
                ) : searchedPosts.length === 0 ? (
                    "No results found"
                ) : (
                    searchedPosts.map(post => (
                        // <Ad key={post.id} post={post} />
                        <MainAdCard key={post.id} post={post} />
                    ))
                )}
            </AdsWrapper>
        </AdsAndFilterWrapper>
    );
};
export default SearchResults;
