import React, { useContext, useState, useEffect } from "react";
import "./SearchResults.css";
import Ad from "./Ad.jsx";
import { SearchContext } from "../App";
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
		return <div className="no-results-found"> No Results Found</div>;
	}
	return (
		<div>
			{searchedPosts.map(post => (
				<Ad key={post.id} />
			))}
		</div>
	);
};
export default SearchResults;
