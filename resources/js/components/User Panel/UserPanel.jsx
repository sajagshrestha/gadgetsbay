import React,{useState,useEffect} from "react";
import "./UserPanel.css";
import HomeAdView from "../Layouts/HomeAdView";
import axios from "axios";



const UserPanel =({history}) => {

    const [ads, setAds] = useState([]);
    const [filteredAds, setFilteredAds] = useState([]);

    useEffect(() => {
        axios
            .get("/api/user/products", {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                setAds(response.data.data);
                setFilteredAds(ads);
                console.log(ads)
            })
            .catch(error => console.log(error));
    }, [ads.length]);

    const onClickOptionHandler = index =>{
        if(index != 0) {
            setFilteredAds(
                ads.filter(ad => ad.status == Number(index))
            )
            console.log(index)
        }
        else
            setFilteredAds(ads)

    }

    const onEditHandler = id =>{
        history.push(`/edit/${id}`);
    }
    const onDeleteHandler = id => {
        axios
            .delete(`/api/product/${id}`,{
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            } )
            .then(response => {
                setAds(
                    ads.filter(ad => ad.id !== response.data.data.id)
                )
                setFilteredAds(
                    filteredAds.filter(ad => ad.id !== response.data.data.id)
                )
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="user-panel-container">

            <div className="user-panel-head">
                <div className="profile-wrapper">
                   <div className="avatar-wrapper">
                       <div className="avatar">
                           <img src="/images/ava.png"/>
                       </div>
                   </div>
                    <div className="name">
                        Purushottam Shrestha
                    </div>
                </div>
                <div className="panel-option-container">
                    <div className="panel-option">
                        Home
                    </div>
                    <div className="panel-option" onClick={() => onClickOptionHandler(0)}>
                        All ads
                    </div>
                    <div className="panel-option" onClick={() => onClickOptionHandler(1)} >
                        Active ads
                    </div>
                    <div className="panel-option" onClick={() => onClickOptionHandler(2)}>
                        Sold
                    </div>
                    <div className="panel-option" onClick={() => onClickOptionHandler(3)}>
                        Expired ads
                    </div>
                </div>
            </div>
            <div className="ads-list">
                {filteredAds.map(product => (
                    <div key={product.id} >
                        <HomeAdView product={product} />
                        <div>
                            <button onClick={()=> onEditHandler(product.id)}>
                                Edit
                            </button>
                            <button onClick={()=> onDeleteHandler(product.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default UserPanel;
