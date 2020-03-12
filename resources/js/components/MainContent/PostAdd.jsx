import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnimateContext } from "../App";
import AdForm from "../Layouts/AdForm";
import "./MainContent.css";
const PostAdd = () => {
    const { pageTransition, pageVariants } = useContext(AnimateContext);
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="post-add-body"
        >
            <AdForm />
        </motion.div>
    );
};

export default PostAdd;
