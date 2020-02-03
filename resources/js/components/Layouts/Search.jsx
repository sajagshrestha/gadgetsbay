import React from "react";
import "./Search.css";
const Search = props => {
    return (
        <form class="search-form">
            <input type="text" placeholder="Search Here" class="search-input" />
            <span>
                <button type="submit" class="search-button">
                    SEARCH
                </button>
            </span>
        </form>
    );
};

export default Search;
