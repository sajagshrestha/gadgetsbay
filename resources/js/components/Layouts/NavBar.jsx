import React, { useContext, createContext, useEffect } from "react";
import "./NavBar.css";
import "./Search.css";
import Search from "./Search";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

function NavBar({ history }) {
    const { user, dispatch, globalToken } = useContext(UserContext);

    const logoutUser = () => {
        axios.get("api/logout", globalToken).then(res => {
            dispatch({ type: "logout" });
            localStorage.removeItem("user");
        });
    };

    return (
        <div className="my-navbar my-body-container">
            <div className="logo-and-search">
                <div className="logo" onClick={() => history.push("/")}>
                    GadgetsBay
                </div>
                <Search />
            </div>

            <ul className="my-nav-menu">
                <li>
                    <Link className="my-link" to="/">
                        HOME
                    </Link>
                </li>

                {user.isLoggedIn ? (
                    <React.Fragment>
                        <li>
                            <Link className="my-link" to="/post">
                                POST
                            </Link>
                        </li>
                        <li>
                            <Link className="my-link" to="/MyAds">
                                MY ADS
                            </Link>
                        </li>
                        <li>
                            <div className="dropdown show">
                                <button
                                    className="my-dropdown-button dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {user.name}
                                </button>

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
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li>
                            <Link className="my-link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li>
                            <Link className="my-link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </React.Fragment>
                )}
            </ul>
        </div>
    );
}

export default withRouter(NavBar);
