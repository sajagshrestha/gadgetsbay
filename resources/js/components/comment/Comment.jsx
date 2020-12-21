import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import SingleComment from "./SingleComment";
import ReplyBox from "./ReplyBox";
import { SnackbarContext, UserContext } from "../App";
import Replies from "./Replies";
import "./Comment.css";
import { Link } from "react-router-dom";

const Comment = ({ ad_id }) => {
    const [comment, setComment] = useState({
        comment: "",
        reply_id: null,
        ad_id: ad_id
    });
    const [comments, setComments] = useState([]);
    const [reply, setReply] = useState();
    const [disablePost, setDisablePost] = useState(false);
    const { snackbarDispatch } = useContext(SnackbarContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        axios
            .get(`/api/comments/${ad_id}`)
            .then(response => {
                setComments(response.data.data);
            })
            .catch(error => {
                console.log(error);
                snackbarDispatch({ type: "error" });
            });
    }, []);

    const onChangeHandler = event => {
        setComment({
            ...comment,
            comment: event.target.value
        });
    };
    const onSubmitHandler = event => {
        setDisablePost(true);
        event.preventDefault();
        axios
            .post("/api/comment", comment, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                console.log(response.data.data);
                setComments([response.data.data, ...comments]);
                setDisablePost(false);
            })
            .catch(err => {
                console.log(err);
                snackbarDispatch({ type: "error" });
            });
        setComment({
            ...comment,
            comment: ""
        });
    };
    const addReply = r => {
        setReply(r);
    };
    return (
        <div className="comment-container">
            {user.isLoggedIn ? (
                <form onSubmit={onSubmitHandler} className="comment-form">
                    <div className="comment-field">
                        <div className="profile-avatar-wrapper-comment">
                            <img src="/images/ava.png" />
                        </div>
                        <TextField
                            placeholder="write a comment"
                            multiline
                            fullWidth
                            name="comment"
                            value={comment.comment}
                            onChange={onChangeHandler}
                            className="comment-text-field"
                        />
                    </div>
                    <div className="comment-btn">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={disablePost}
                            size="small"
                        >
                            Post
                        </Button>
                    </div>
                </form>
            ) : (
                <div className="login-suggestion">
                    <span>
                        <Link to="/login">Login</Link> to post a comment
                    </span>
                </div>
            )}

            {comments.length === 0
                ? "Be the first to comment in this post"
                : comments.map(c => (
                      <div key={c.id} className="single-comment-wrap">
                          <SingleComment comment={c} />
                          {user.isLoggedIn && (
                              <ReplyBox
                                  ad_id={ad_id}
                                  reply_id={c.id}
                                  updateReplies={addReply}
                              />
                          )}

                          {reply && reply.reply_id === c.id ? (
                              <Replies comment={c} reply={reply} />
                          ) : (
                              <Replies comment={c} />
                          )}
                      </div>
                  ))}
        </div>
    );
};

export default Comment;
