import React from "react";
import NavBar from "./Layouts/NavBar.jsx";
import AllAds from "./MainContent/AllAds";
import PostAdd from "./MainContent/PostAdd";
import FindAdd from "./MainContent/FindAdd";
import Home from "./MainContent/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Route path="/" exact component={AllAds} />
                <Route path="/post" component={PostAdd} />
                <Route path="/find" component={FindAdd} />
            </div>
        </Router>
    );
}

export default App;
