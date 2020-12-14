import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { SearchWrapper } from "./Search.styles";
import SearchBar from "material-ui-search-bar";
const Search = ({ history }) => {
    const [search, setSearch] = useState("");
    const onSubmitHandler = event => {
        event.preventDefault();
        history.push(`/searchResults?title=${search}`);
        setSearch("");
    };

    const onChangeHandler = value => {
        setSearch(value);
    };
    return (
        <SearchWrapper>
            <form onSubmit={onSubmitHandler}>
                <SearchBar
                    style={{
                        height: "40px",
                        boxShadow: "none",
                        border: "2px solid #F6F6F6"
                    }}
                    value={search}
                    onChange={onChangeHandler}
                />
                {/* <input
                    type="text"
                    placeholder="Search Here"
                    className="search-input"
                    name="search"
                    onChange={onChangeHandler}
                /> */}
                {/* <span>
                    <button
                        type="submit"
                        className="search-button"
                        id="searchButton"
                    >
                        <i className="fa fa-search"></i>
                    </button>
                </span> */}
            </form>
        </SearchWrapper>
    );
};

export default withRouter(Search);
