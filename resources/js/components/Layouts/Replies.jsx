import React,{useState,useEffect} from "react";
import SingleComment from "./SingleComment";


const Replies = ({comment}) => {
    const [replyBox,setReplyBox] = useState('');
    const [replies,setReplies] = useState([]);


    useEffect(() => {
        if (comment.replies_count > 0) {
            if (comment.replies_count ===1) {
                setReplyBox(<div className="replies">
                    <button  onClick={viewReplies}>
                        View {comment.replies_count} Reply
                    </button>
                </div>)
            }
            else {
                setReplyBox (
                    <div className="replies">
                        <button  onClick={viewReplies} >
                            View {comment.replies_count} Replies
                        </button>
                    </div>
                );
            }
        }
    }, [comment]);

    const getReplies = () => {
        axios
            .get(`/api/replies/${comment.id}`)
            .then(response => {
                setReplies(response.data.data);
            })
            .catch(error => console.log(error));

    }

    const viewReplies = () => {
        getReplies();
        console.log(replies)
    }

    
    return (
        <div>
            {replyBox}
        </div>
    );
}

export  default Replies;
