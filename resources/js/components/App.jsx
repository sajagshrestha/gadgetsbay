import React, { useReducer, useEffect, useState } from "react";
import NavBar from "./Layouts/NavBar.jsx";
import AllAds from "./MainContent/AllAds";
import PostAdd from "./MainContent/PostAdd";
import FindAdd from "./MainContent/FindAdd";
import Home from "./MainContent/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./responsive.css";
export const UserContext = React.createContext();

const initialState = {
    isLoggedIn: false,
    name: "",
    token: ""
};
const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                isLoggedIn: true,
                name: action.name,
                token: action.token
            };
        case "logout":
            return initialState;
        default:
            return;
    }
};
function App() {
    const [user, dispatch] = useReducer(reducer, initialState);
    const globalToken = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser) {
            dispatch({
                type: "login",
                name: localUser.name,
                token: localUser.token
            });
        }
    }, [user.token]);

    return (
        <UserContext.Provider
            value={{
                user: user,
                dispatch: dispatch,
                globalToken: globalToken
            }}
        >
            <Router>
                <div>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/post" exact component={PostAdd} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
