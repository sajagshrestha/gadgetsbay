import React,{useState} from "react";
import "./SingleComment.css";
import ReplyBox from "./ReplyBox";


const SingleComment = ({comment,updateReplies}) =>
{
    const onClickReplyBtnHandler =() => {
        setReplyButton(
            <div className="reply-box-container">
                <div className="profile-avatar-wrapper">
                    <div className="avatar">
                        <img src="/images/ava.png"/>
                    </div>
                </div>
                <ReplyBox ad_id={comment.ad_id} reply_id={comment.id} updateReplies={updateReplies} cancelHandler={onCancelHandler}/>

            </div>
        );
    }

    const onCancelHandler = () => {
        setReplyButton(
            <button  onClick={onClickReplyBtnHandler} className="reply-button">
                REPLY
            </button>
        );
    }

    const [replyButton,setReplyButton] = useState(
        <button  onClick={onClickReplyBtnHandler} className="reply-button">
            REPLY
        </button>
    );


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

                {replyButton}
            </div>
        </div>
    );


};

export default SingleComment;
