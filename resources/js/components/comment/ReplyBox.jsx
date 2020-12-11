import React, { useState, useContext } from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { SnackbarContext } from "../App";
import "./ReplyBox.css";

const ReplyBox = ({ ad_id, reply_id, updateReplies }) => {
    const { snackbarDispatch } = useContext(SnackbarContext);
    const [commentReply, setCommentReply] = useState({
        comment: "",
        reply_id: reply_id,
        ad_id: ad_id
    });
    const [displayReplyBox, setDisplayReplyBox] = useState(false);

    const onChangeHandler = event => {
        setCommentReply({
            ...commentReply,
            comment: event.target.value
        });
    };
    const onClickReplyBtnHandler = () => {
        setDisplayReplyBox(true);
    };
    const cancelHandler = () => {
        setDisplayReplyBox(false);
    };
    const onSubmitHandler = event => {
        event.preventDefault();
        axios
            .post("/api/comment", commentReply, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                console.log(response.data.data);
                setDisplayReplyBox(false);
                setCommentReply({
                    ...commentReply,
                    comment: ""
                });
                updateReplies(response.data.data);
            })
            .catch(err => {
                console.log(err);
                snackbarDispatch({ type: "error" });
            });
        console.log(commentReply);
    };

    return (
        <div>
            {displayReplyBox ? (
                <form onSubmit={onSubmitHandler}>
                    <div className="reply-box">
                        <div className="reply-box-wrapper">
                            <div className="profile-avatar-wrapper-reply">
                                <div className="profile-avatar-icon-reply">
                                    <img src="/images/ava.png" />
                                </div>
                            </div>
                            <div className="reply-form-wrapper" > 
                                <TextField
                                    fullWidth
                                    multiline
                                    name="comment"
                                    value={commentReply.comment}
                                    onChange={onChangeHandler}
                                    className="reply-box"
                                />
                                <div className="button-container">
                                    <Button
                                        onClick={cancelHandler}
                                        type="button"
                                        className="reply-button"
                                    >
                                        CANCEL
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="reply-button"
                                    >
                                        REPLY
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="reply-box">
                    <button
                        onClick={onClickReplyBtnHandler}
                        className="reply-button"
                    >
                        REPLY
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReplyBox;
