import React, { useState, useContext } from "react";
import "./Search.css";
import { SearchContext } from "../App.jsx";
import { withRouter } from "react-router-dom";
const Search = ({ history }) => {
    const [search, setSearch] = useState("");
    const { setSearchedPosts } = useContext(SearchContext);
    const onSubmitHandler = event => {
        event.preventDefault();

        axios
            .post("/api/filter", { title: search })
            .then(response => {
                setSearchedPosts(response.data.data);

                history.push("/searchResults");
            })
            .catch(err => console.log(err));
    };

    const onChangeHandler = event => {
        setSearch(event.target.value);
    };

    return (
        <form onSubmit={onSubmitHandler} className="search-form">
            <input
                type="text"
                placeholder="Search Here"
                className="search-input"
                name="search"
                onChange={onChangeHandler}
            />
            <span>
                <button
                    type="submit"
                    className="search-button"
                    id="searchButton"
                >
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </form>
    );
};

export default withRouter(Search);
