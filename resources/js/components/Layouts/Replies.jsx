import React,{useState,useEffect} from "react";
import SingleComment from "./SingleComment";
import axios from "axios";
import "./Replies.css";

const Replies = ({comment}) => {
    const [replyBox,setReplyBox] = useState('');
    const [replies,setReplies] = useState([]);


    useEffect(() => {
        viewRepliesBtn();
    }, []);



    const viewRepliesBtn = () => {
        if (comment.replies_count > 0) {
            if (comment.replies_count ===1) {
                setReplyBox(
                    <div className="replies">
                        <button  onClick={viewReplies} className="view-replies-btn">
                            View {comment.replies_count} Reply
                        </button>
                    </div>)
            }
            else {
                setReplyBox (
                    <div className="replies">
                        <button  onClick={viewReplies} className="view-replies-btn">
                            View {comment.replies_count} Replies
                        </button>
                    </div>
                );
            }
        }
        setReplies([]);
    }

    const viewReplies = () => {
        axios
            .get(`/api/replies/${comment.id}`)
            .then(response => {
                setReplies(response.data.data);
            })
            .catch(error => console.log(error));

        setReplyBox(
            <div className="replies">
                <button  onClick={viewRepliesBtn} className="view-replies-btn">
                    Hide Replies
                </button>

        </div>)
    }

    const updateReplies = reply => {
        setReplies([
            ...replies,
            reply
        ])
    }
    return (
        <div>
            <div className="replies-container">
                    <div className="reply">
                        {replies.map(reply => (
                            <SingleComment  comment={reply}  key={reply.id} updateReplies={updateReplies}/>
                        ))}
                    </div>
            </div>
            {replyBox}

        </div>
    );
}

export  default Replies;
