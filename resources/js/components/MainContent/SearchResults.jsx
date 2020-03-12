import React, { useContext, useState, useEffect } from "react";
import "./SearchResults.css";
import Ad from "./Ad.jsx";
import { motion } from "framer-motion";
import { AnimateContext } from "../App";
import { SearchContext } from "../App";
import Filter from "./Filter";
const SearchResults = () => {
    const { pageTransition, pageVariants } = useContext(AnimateContext);
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
	            <motion.div
	                initial="out"
	                animate="in"
	                exit="out"
	                variants={pageVariants}
	                transition={pageTransition}
	                className="no-results-found"
	            >
	                No Results Found
	            </motion.div>
	            </div>
        );
    }
    return (
    	<div className="search-result">
			<Filter />
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {searchedPosts.map(post => (
                <Ad key={post.id} />
            ))}
        </motion.div>
        </div>
    );
};
export default SearchResults;
