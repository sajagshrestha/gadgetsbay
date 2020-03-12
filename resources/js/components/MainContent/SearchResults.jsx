import React, { useContext, useState, useEffect } from "react";
import "./SearchResults.css";
import Ad from "./Ad.jsx";
import { motion } from "framer-motion";
import { AnimateContext } from "../App";
import { SearchContext } from "../App";
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
        );
    }
    return (
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
    );
};
export default SearchResults;
