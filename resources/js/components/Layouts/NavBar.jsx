import React from "react";
import "./NavBar.css";
import Search from "./Search";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div className="my-navbar">
            <div className="navbar-items">
                <div className="logo-and-search">
                    <div className="logo">GadgetsBay</div>
                    <Search />
                </div>

                <ul className="my-nav-menu">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="./post">POST</Link>
                    </li>
                    <li>
                        <Link to="./find">FIND</Link>
                    </li>
                    <li>
                        <Link to="./register">REGISTER</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
