import React, {useEffect, useState} from "react";
import SingleComment from "./SingleComment";
import "./comment.css";
import Replies from "./Replies";
import axios from "axios";
const Comment = ({ad_id}) => {

    const [comments, setComments] = useState([]);
    const [reply, setReply] = useState([]);
    const [comment,setComment] = useState({
        "comment": "",
        "reply_id": null,
        "ad_id":ad_id,
    });
    useEffect(() => {
        axios
            .get(`/api/comments/${ad_id}`)
            .then(response => {
                setComments(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);
    const onChangeHandler = event => {
        setComment({
            ...comment,
            comment: event.target.value,
        });
    }
    const onSubmitHandler = event =>
    {
        event.preventDefault();
        axios
            .post('/api/comment',comment,{
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }})
            .then(response => {
                console.log(response.data.data);
                setComments([response.data.data,
                    ...comments,
                    ]
                );
            }).catch(err => console.log(err));
        setComment({
            "comment": "",
            "reply_id": null,
            "ad_id":ad_id,
        });


   }

   const addReply = r => {
        setReply(r);
   }
    return (
        <div className="container">
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="write a comment"
                name="comment"
                value={comment.comment}
                onChange={onChangeHandler}
            />
            <span>
                <button
                    type="submit"
                    className="search-button"
                    id="searchButton"
                >Post
                </button>
            </span>
        </form>
            {comments.map(comment => (
                <div key={comment.id}>
                    <SingleComment  comment={comment} updateReplies={addReply}/>
                    { reply.reply_id === comment.id?
                        <Replies comment={comment} reply={reply}/>
                            : <Replies comment={comment}/>

                    }
                    {


                    }
                </div>

            ))}
        </div>
    );
};

export default Comment;
