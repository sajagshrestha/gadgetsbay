import React from "react";
import "./NavBar.css";
function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="logo">GadgetsBay</div>
                <ul className="nav-menu">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Post an Ad</a>
                    </li>
                    <li>
                        <a href="">About</a>
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
