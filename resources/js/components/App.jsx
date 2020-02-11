import React from "react";
import NavBar from "./Layouts/NavBar.jsx";
import AllAds from "./MainContent/AllAds";
import PostAdd from "./MainContent/PostAdd";
import FindAdd from "./MainContent/FindAdd";
import Home from "./MainContent/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
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
    );
}

export default App;
