import React, { useContext, useState, useEffect } from "react";
import "./SearchResults.css";
import Ad from "./Ad.jsx";

import { SearchContext } from "../App";
import Filter from "./Filter";
const SearchResults = () => {
    const [resultFound, setResultFound] = useState(false);
    const { searchedPosts } = useContext(SearchContext);
    useEffect(() => {
        if (searchedPosts.length === 0) {
            setResultFound(false);
        } else {
            setResultFound(true);
        }
    }, [searchedPosts]);
    if (!resultFound) {
        return (
            <div className="search-result">
                <Filter />
                No Results Found
            </div>
        );
    }
    return (
        <div className="search-result">
            <Filter />

            {searchedPosts.map(post => (
                <Ad key={post.id} post={post} />
            ))}
        </div>
    );
};
export default SearchResults;
