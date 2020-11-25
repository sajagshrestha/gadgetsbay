import React,{useState} from "react";
import axios from "axios";

const ReplyBox = ({ad_id ,reply_id,updateReplies}) => {
    const [commentReply,setCommentReply] = useState({
        "comment": "",
        "reply_id": reply_id,
        "ad_id":ad_id,
    });
    const onChangeHandler = event => {
        setCommentReply({
            ...commentReply,
            comment: event.target.value,
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        axios
            .post('/api/comment',commentReply,{
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }})
            .then(response => {
                console.log(response.data.data);
                updateReplies(response.data.data);
            }).catch(err => console.log(err));
        console.log(commentReply);

        setCommentReply({
            ...commentReply,
            "comment": "",

        });
    }



    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="reply-box-wrapper">
                    <input
                        type="text"
                        name="comment"
                        value={commentReply.comment}
                        onChange={onChangeHandler}
                        className="reply-box"
                    />
                    <div className="button-container">

                        <button onSubmit={onSubmitHandler} className="reply-button">
                            REPLY
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ReplyBox;
