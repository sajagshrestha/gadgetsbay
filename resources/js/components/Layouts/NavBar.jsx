import React from "react";
import "./NavBar.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

function NavBar() {
    const { user, dispatch } = React.useContext(UserContext);
    const logoutUser = () => {
        axios
            .get("api/logout", {
                headers: { Authorization: `Bearer ${user.token}` }
            })
            .then(res => {
                console.log("logout sucessfull");
                dispatch({ type: "logout" });
                localStorage.removeItem("user");
            });
    };
    return (
        <div className="my-navbar">
            <div className="navbar-items">
                <div className="logo-and-search">
                    <div className="logo">GadgetsBay</div>
                    <Search />
                </div>

                <ul className="my-nav-menu">
                    <li>
                        <Link className="my-link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className="my-link" to="./post">
                            POST
                        </Link>
                    </li>
                    <li>
                        <Link className="my-link" to="./find">
                            FIND
                        </Link>
                    </li>
<<<<<<< HEAD

                    {user.isLoggedIn ? (
                        <li>
                            <div className="dropdown show">
                                <a
                                    className="btn btn-primary dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {user.name}
                                </a>

                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <button
                                        className="dropdown-item"
                                        onClick={() => logoutUser()}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </li>
                    ) : (
                        <React.Fragment>
                            <li>
                                <Link className="my-link" to="./login">
                                    LOGIN
                                </Link>
                            </li>
                            <li>
                                <Link className="my-link" to="./register">
                                    REGISTER
                                </Link>
                            </li>
                        </React.Fragment>
                    )}

=======
                    <li>
                        <Link to="./login">LOGIN</Link>
                    </li>
>>>>>>> product api changes and fixes
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
