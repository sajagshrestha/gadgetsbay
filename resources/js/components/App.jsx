import React, { useReducer, useEffect } from "react";
import NavBar from "./Layouts/NavBar.jsx";
import AllAds from "./MainContent/AllAds";
import PostAdd from "./MainContent/PostAdd";
import FindAdd from "./MainContent/FindAdd";
import Home from "./MainContent/Home";
import Register from "./Auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
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
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser) {
            dispatch({
                type: "login",
                name: localUser.name,
                token: localUser.token
            });
        }
        console.log(user);
    }, [user.token]);

    //check local storage for use value
    //if value exists , dispatch, set from local storage
    //if not then proceed normally
    return (
        <UserContext.Provider value={{ user: user, dispatch: dispatch }}>
            <Router>
                <div>
                    <NavBar />
                    <Route path="/" exact component={AllAds} />
                    <Route path="/post" exact component={PostAdd} />
                    <Route path="/find" exact component={FindAdd} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
