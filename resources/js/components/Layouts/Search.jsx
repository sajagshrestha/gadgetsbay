import React, {useState} from "react";
import "./Search.css";

const Search = props => {

    const [search,setSearch] = useState('');
    const [posts, setPost] = useState({});
    const onSubmitHandler = event => {
        event.preventDefault();
        axios
        .post("/api/search" , search)
        .then(response => {
            console.log('uolo')
            console.log(response.data.data)
            setPost(response.data.data)
        })
        .catch(err => console.log(err));

    }

    const onChangeHandler = event => {
        setSearch(
             event.target.value
        );
    };

    return (
        <form  onSubmit = {onSubmitHandler} className="search-form">
            <input
                type="text"
                placeholder="Search Here"
                className="search-input"
                name = "search"
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

export default Search;
