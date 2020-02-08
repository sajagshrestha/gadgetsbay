import React, { useState } from "react";
import axios from "axios";

const FindAdd = () => {
    const [ad, setAd] = useState({});
    const [id, setId] = useState("");

    const FindHandler = () => {
        axios.get(`/api/product/${id}`).then(response => {
            console.log(response.data.data);
            setAd(response.data.data);
        });
        console.log("test");
    };
    return (
        <div>
            <h1>Find an add</h1>

            <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button onClick={() => FindHandler()}>Find</button>
            <div>
                {ad.id} {ad.title} {ad.imageName}
                <img
                    src={`storage/images/${ad.imageName}`}
                    alt=""
                    height="100"
                    width="100"
                />
            </div>
        </div>
    );
};

export default FindAdd;
