import React,{useState,useEffect} from "react";
import "./UserPanel.css";
import HomeAdView from "../Layouts/HomeAdView";
import axios from "axios";
import UserDashboard from "./UserDashboard";



const UserPanel =({history}) => {

    const [ads, setAds] = useState([]);
    const [index,setIndex] = useState();
    const [filteredAds, setFilteredAds] = useState([]);
    const [userStats,setUserStats] = useState({sold: 0, totalAds: 0, views: 0});
    const [notifications,setNotifications] = useState([]);

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
            })
            .catch(error => console.log(error));
        setIndex(null);
        axios
            .get('/api/userstats',{
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                setUserStats(response.data);
            })
            .catch(err=>console.log(err));
        axios
            .get('/api/user/notifications',{
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(response => {
                setNotifications(response.data.data);
            })
            .catch(err=>console.log(err));

    }, []);

    useEffect(()=> {
        console.log(index)
        if (index !== null)
        {
            if(index !== 0) {
                setFilteredAds(
                    ads.filter(ad => ad.status == Number(index))
                )
            }
            else
                setFilteredAds(ads)
        }
    },[index])

    const onClickOptionHandler = i =>{
        setIndex(i);
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
                    <div className="panel-option" onClick={() => onClickOptionHandler(null)}>
                        Dashboard
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
                {
                    index === null ?
                        <UserDashboard userStats={userStats} activities={notifications} />
                        : <div>
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

                }


            </div>
        </div>
    );
}

export default UserPanel;
