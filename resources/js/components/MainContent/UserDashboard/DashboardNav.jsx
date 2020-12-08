import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { DashboardNavWrapper } from "./UserDashboard.styles";
const MyNavLink = ({ children, ...props }) => {
    return (
        <NavLink
            activeStyle={{
                borderBottomColor: "#6C63FF"
            }}
            {...props}
        >
            {children}
        </NavLink>
    );
};
const DashboardNav = () => {
    const { url } = useRouteMatch();
    return (
        <DashboardNavWrapper>
            <MyNavLink exact to={`${url}`}>
                Active Ads
            </MyNavLink>

            <MyNavLink to={`${url}/sold-ads`}>Sold Ads</MyNavLink>

            <MyNavLink to={`${url}/expired-ads`}>Expired Ads</MyNavLink>
            <MyNavLink to={`${url}/all-my-ads`}>All My Ads</MyNavLink>
        </DashboardNavWrapper>
    );
};

export default DashboardNav;
