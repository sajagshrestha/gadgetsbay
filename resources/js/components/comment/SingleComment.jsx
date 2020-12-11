import React from "react";
import "./SingleComment.css";

const SingleComment = ({comment}) =>
{
    return(
        <div className = "single-comment-container ">
            <div className="profile-avatar-wrapper">
                <div className="profile-avatar-icon">
                    <img src="/images/ava.png"/>
                </div>
            </div>
            <div className="comment-description">
                <div className="comment-head">
                    <span className="user-name">
                        {comment.user.name}
                    </span>
                    <span className="created-at">
                        {comment.created_at}
                    </span>
                </div>
                <div className="comment-body">
                    {comment.comment}
                </div>

            </div>
        </div>
    );
};

export default SingleComment;
