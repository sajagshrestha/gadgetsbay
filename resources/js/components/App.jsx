//Import Dependency
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Import Components
import NavBar from "./MainContent/Nav/NavBar.jsx";
import AllAds from "./MainContent/AllAds";
import PostAdd from "./MainContent/PostAdd";
import FindAdd from "./MainContent/FindAdd";
import Home from "./MainContent/Home/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import SearchResults from "./MainContent/SearchResults/SearchResults";
import DetailedAdView from "./MainContent/Ads/DetailedAdView";
import UserDashboard from "./MainContent/UserDashboard/UserDashboard";
import EditAd from "./MainContent/EditAd";
//Import styles
import { AppWrapper, Theme } from "./App.styles";
import { ThemeProvider } from "styled-components";

//Export Contexts
export const UserContext = React.createContext();
export const SearchContext = React.createContext();
export const AnimateContext = React.createContext();

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
    const [globalToken, setGlobalToken] = useState({});
    //For Search
    const [searchedPosts, setSearchedPosts] = useState([]);
    //
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser) {
            dispatch({
                type: "login",
                name: localUser.name,
                token: localUser.token
            });
            setGlobalToken({
                headers: {
                    Authorization: `Bearer ${localUser.token}`
                }
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
                        <BrowserRouter>
                            <NavBar />

                            <Switch>
                                <Route
                                    path="/searchResults/:title"
                                    exact
                                    component={SearchResults}
                                />
                                <Route path="/" exact component={Home} />
                                <Route path="/post" exact component={PostAdd} />
                                <Route
                                    path="/register"
                                    exact
                                    component={Register}
                                />
                                <Route
                                    path="/dashboard"
                                    component={UserDashboard}
                                />
                                <Route
                                    path="/edit/:id"
                                    exact
                                    component={EditAd}
                                />
                                <Route path="/login" exact component={Login} />
                                <Route
                                    path={`/details/:id/:title`}
                                    exact
                                    component={DetailedAdView}
                                />
                            </Switch>
                        </BrowserRouter>
                    </SearchContext.Provider>
                </AppWrapper>
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
