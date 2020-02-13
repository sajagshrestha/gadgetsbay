import React, { useContext } from "react";
import "./Search.css";
import { UserContext } from "../App";

const Search = props => {
    const { isHome } = useContext(UserContext);
    return (
        <form className="search-form">
            <input
                type="text"
                placeholder="Search Here"
                className="search-input"
            />
            <span>
                <button
                    type="submit"
                    className={isHome ? "search-button-home" : "search-button"}
                    id="searchButton"
                >
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </form>
    );
};

export default Search;
