import React, { useState, useContext } from "react";
import { SearchContext } from "../../App.jsx";
import { withRouter } from "react-router-dom";
import { SearchWrapper } from "./Search.styles";
import SearchBar from "material-ui-search-bar";
import axios from "axios";

const Search = ({ history }) => {
    const [search, setSearch] = useState("");
    const { setSearchedPosts } = useContext(SearchContext);
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(search);
        axios
            .post("/api/filter", { title: search })
            .then(response => {
                setSearchedPosts(response.data.data);
                history.push("/searchResults");
            })
            .catch(err => console.log(err));
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
