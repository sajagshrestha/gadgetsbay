import React,{useState,useEffect} from "react";
import axios from "axios";

const UserDashboard = ({userStats,activities}) => {

    console.log(activities)
    return(
        <div>
            <div className="">
                <div className="">
                    <div className="">Total ads listed</div>
                </div>
                <div className="">
                    {userStats.totalAds}
                </div>
                <div className="">
                    <div className="">Total ads marked sold</div>
                </div>
                <div className="">
                    {userStats.sold}
                </div>
                <div className="">
                    <div className="">Total ad views</div>
                </div>
                <div className="">
                    {userStats.views}
                </div>
            </div>
            <div className="">
                <div className="">
                    Recent Activity
                </div>
                <div className="">
                    {activities !== undefined ?
                        <div>
                            {activities.map(activity=>(
                                <div key={activity.id}>
                                    {activity.body}
                                </div>
                            ))}
                        </div>
                        :{}
                    }

                </div>
            </div>


        </div>
    );

}

export default UserDashboard;
