//Import Dependency
import React, { useReducer, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
//Import Components
import NavBar from "./MainContent/Nav/NavBar.jsx";
import AllAds from "./MainContent/AllAds";
import PostAdd from "./MainContent/PostAdd";
import FindAdd from "./MainContent/FindAdd";
import Home from "./MainContent/Home/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import SearchResults from "./MainContent/SearchResults";
import DetailedAdView from "./MainContent/DetailedAdView";
import MyAds from "./MainContent/MyAds";
import EditAd from "./MainContent/EditAd";
//Import styles
import { AppWrapper, Theme } from "./App.styles";
import { ThemeProvider } from "styled-components";
//Export Contexts
export const UserContext = React.createContext();
export const SearchContext = React.createContext();
export const AnimateContext = React.createContext();
//For page Transitions
const pageVariants = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};
const pageTransition = {
    duration: 0.3,
    transition: "linear"
};
//For Authentitcation
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

//Main App
function App() {
    //For Authentication
    const [user, dispatch] = useReducer(reducer, initialState);
    const globalToken = {
        headers: { Authorization: `Bearer ${user.token}` }
    };
    //For Search
    const [searchedPosts, setSearchedPosts] = useState([]);
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
        <ThemeProvider theme={Theme}>
            <UserContext.Provider
                value={{
                    user: user,
                    dispatch: dispatch,
                    globalToken: globalToken
                }}
            >
                <AppWrapper>
                    <SearchContext.Provider
                        value={{ searchedPosts, setSearchedPosts }}
                    >
                        <NavBar />
                        <AnimatePresence ExitBeforeEnter>
                            <AnimateContext.Provider
                                value={{ pageTransition, pageVariants }}
                            >
                                <Switch>
                                    <Route
                                        path="/searchResults"
                                        exact
                                        component={SearchResults}
                                    />
                                    <Route path="/" exact component={Home} />
                                    <Route
                                        path="/post"
                                        exact
                                        component={PostAdd}
                                    />
                                    <Route
                                        path="/register"
                                        exact
                                        component={Register}
                                    />
                                    <Route
                                        path="/myAds"
                                        exact
                                        component={MyAds}
                                    />
                                    <Route
                                        path="/edit/:id"
                                        exact
                                        component={EditAd}
                                    />
                                    <Route
                                        path="/login"
                                        exact
                                        component={Login}
                                    />
                                    <Route
                                        path={`/details/:id/:title`}
                                        exact
                                        component={DetailedAdView}
                                    />
                                </Switch>
                            </AnimateContext.Provider>
                        </AnimatePresence>
                    </SearchContext.Provider>
                </AppWrapper>
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
