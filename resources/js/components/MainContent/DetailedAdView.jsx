import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "../Layouts/Comment";
import { UserContext } from "../App";
import Comment from "../Layouts/Comment";

const DeatiledAdView = () => {
	const [ad, setAd] = useState({});
	const { id } = useParams();
    const { globalToken } = useContext(UserContext);
	useEffect(() => {
		if(localStorage.getItem("user"))
		{
		axios
			.get(`/api/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
			.then(response => {setAd(response.data.data);
				console.log(response.data);})
			.catch(error => console.log(error));
		}
		else{
			axios
			.get(`/api/product/${id}`)
			.then(response => {setAd(response.data.data);
				console.log(response.data);})
			.catch(error => console.log(error));
		}
	}, []);

<<<<<<< HEAD
	const viewCommentBox = ad => {
	    if(ad.id)
	        return <Comment ad_id={ad.id} />
    }
	return <div>
        {ad.title}
        {viewCommentBox(ad)}
    </div>;
=======
	const displayComments = ad =>
    {
        if(ad.id)
        {
            return  <Comment ad_id={ad.id} />
        }
    }
	return (
	    <div>
            <div>{ad.title}</div>
            {displayComments(ad)}
        </div>
    );
>>>>>>> working on reply system

};

export default DeatiledAdView;
