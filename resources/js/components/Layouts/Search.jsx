import React from "react";
import "./Search.css";
const Search = props => {
    return (
        <form className="search-form">
            <input
                type="text"
                placeholder="Search Here"
                className="search-input"
            />
            <span>
                <button type="submit" className="search-button">
                    SEARCH
                </button>
            </span>
        </form>
    );
};

export default Search;
