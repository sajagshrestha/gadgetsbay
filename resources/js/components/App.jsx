//Import Dependency
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Import Components
import NavBar from "./MainContent/Nav/NavBar.jsx";
import PostAdd from "./MainContent/PostAdd";
import Home from "./MainContent/Home/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import SearchResults from "./MainContent/SearchResults/SearchResults";
import DetailedAdView from "./MainContent/Ads/DetailedAdView";
import UserDashboard from "./MainContent/UserDashboard/UserDashboard";
import EditAd from "./MainContent/EditAd";
import NotificationSnackbar from "./NotificationSnackbar";
//protected Routes
import ProtectedRoute from "./ProtectedRoute";
//Import styles
import { AppWrapper, Theme } from "./App.styles";
import { ThemeProvider } from "styled-components";

//Export Contexts
export const UserContext = React.createContext();
export const SearchContext = React.createContext();
export const SnackbarContext = React.createContext();
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
//For Snackbar
const snackbarInitialState = {
    isOpen: false,
    message: "",
    severity: ""
};
const snackbarReducer = (state, action) => {
    switch (action.type) {
        case "error":
            if(action.message)
            {
                return {
                    isOpen: true,
                    message: action.message,
                    severity: "error"
                };
            }
            else{
                return {
                    isOpen: true,
                    message: "Something went wrong",
                    severity: "error"
                };
            }
        case "success":
            return {
                isOpen: true,
                message: action.message,
                severity: "success"
            };
        case "close":
            return {
                ...state,
                isOpen: false
            };
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
    //For Snackbar
    const [snackbar, snackbarDispatch] = useReducer(
        snackbarReducer,
        snackbarInitialState
    );

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
                <SnackbarContext.Provider
                    value={{ snackbarDispatch: snackbarDispatch }}
                >
                    <AppWrapper>
                        <SearchContext.Provider
                            value={{ searchedPosts, setSearchedPosts }}
                        >
                            <BrowserRouter>
                                <NavBar />

                                <Switch>
                                    <Route
                                        path="/searchResults"
                                        component={SearchResults}
                                    />
                                    <Route path="/" exact component={Home} />
                                    <ProtectedRoute path="/post" exact>
                                        <PostAdd />
                                    </ProtectedRoute>
                                    <Route
                                        path="/register"
                                        exact
                                        component={Register}
                                    />
                                    <ProtectedRoute path="/dashboard">
                                        <UserDashboard />
                                    </ProtectedRoute>

                                    <ProtectedRoute path="/edit/:id" exact>
                                        <EditAd />
                                    </ProtectedRoute>
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
                                <NotificationSnackbar
                                    open={snackbar.isOpen}
                                    handleClose={() =>
                                        snackbarDispatch({ type: "close" })
                                    }
                                    message={snackbar.message}
                                    severity={snackbar.severity}
                                />
                            </BrowserRouter>
                        </SearchContext.Provider>
                    </AppWrapper>
                </SnackbarContext.Provider>
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
