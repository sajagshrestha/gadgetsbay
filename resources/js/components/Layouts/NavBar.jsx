import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="logo">GadgetsBay</div>
                <ul className="nav-menu">
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                    <li>
                        <Link to="./post">Post an Ad</Link>
                    </li>
                    <li>
                        <Link to="./find">Find</Link>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
