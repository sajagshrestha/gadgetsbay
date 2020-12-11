import React, { useState, useEffect, useContext } from "react";
import SingleComment from "./SingleComment";
import axios from "axios";
import "./Replies.css";
import { SnackbarContext } from "../App";
import ReplyBox from "./ReplyBox";

const Replies = ({ comment, reply }) => {
    const [replies, setReplies] = useState([]);
    const [showReplies, setShowReplies] = useState(false);
    const { snackbarDispatch } = useContext(SnackbarContext);

    useEffect(() => {
        if (reply != undefined) {
            addReply(reply);
        } else {
            axios
                .get(`/api/replies/${comment.id}`)
                .then(response => {
                    setReplies(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                    snackbarDispatch({ type: "error" });
                });
        }
    }, [reply]);

    const displayReplies = () => {
        setShowReplies(true);
    };
    const hideReplies = () => {
        setShowReplies(false);
    };

    const addReply = r => {
        comment.replies_count++;
        setReplies([...replies, r]);
        displayReplies();
    };
    return (
        <div>
            <div className="replies-container">
                {comment.replies_count ? (
                    <div className="replies">
                        {showReplies ? (
                            <div >
                                <div >
                                    {replies.map(reply => (
                                        <div key={reply.id}>
                                            <SingleComment comment={reply} />
                                            <ReplyBox
                                                ad_id={comment.ad_id}
                                                reply_id={comment.id}
                                                updateReplies={addReply}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={hideReplies}
                                    className="replies-btn"
                                >
                                    Hide Replies
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={displayReplies}
                                className="replies-btn"
                            >
                                {comment.replies_count > 1
                                    ? `View ${comment.replies_count} Replies`
                                    : `View ${comment.replies_count} Reply`}
                            </button>
                        )}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Replies;
