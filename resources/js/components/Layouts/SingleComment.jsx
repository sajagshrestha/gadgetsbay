import React from "react";
import "./SingleComment.css";



const SingleComment = ({comment}) =>
{

    const viewRepliesButton = comment => {
        if (comment.replies_count > 0) {
            if (comment.replies_count ==1) {
                return (
                    <div className="replies">
                        <button>
                            View {comment.replies_count} Reply
                        </button>
                    </div>
                );
            }
            else {
                return (
                    <div className="replies">
                        <button>
                            View {comment.replies_count} Replies
                        </button>
                    </div>
                );
            }
        }

    }

    return(
        <div className = "comment-container ">
            <div className="profile-avatar-wrapper">
            <div className="avatar">
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
                <div className="reply-box">
                    REPLY
                </div>


            </div>
        </div>
    );


};

export default SingleComment;
