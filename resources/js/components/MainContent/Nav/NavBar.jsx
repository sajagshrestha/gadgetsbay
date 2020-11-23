import React, { useContext, createContext, useEffect } from "react";
import Search from "../SearchBox/Search";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import LogoImg from "../../SVGassets/Logo.svg";
import { NavWrapper, Logo, NavLinks, RegisterButton } from "./Nav.styles";

function NavBar({ history }) {
    const { user, dispatch, globalToken } = useContext(UserContext);

    const logoutUser = () => {
        axios.get("api/logout", globalToken).then(res => {
            dispatch({ type: "logout" });
            localStorage.removeItem("user");
        });
    };

    return (
        <NavWrapper>
            <Logo onClick={() => history.push("/")}>
                <img src={LogoImg} />
            </Logo>
            <NavLinks>
                <Search />
                <div className="links">
                    <Link className="my-link" to="/">
                        Home
                    </Link>
                    {user.isLoggedIn ? (
                        <React.Fragment>
                            <li>
                                <Link className="my-link" to="/post">
                                    Post
                                </Link>
                            </li>
                            <li>
                                <Link className="my-link" to="/MyAds">
                                    My Ads
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
                                    Login
                                </Link>
                            </li>
                            <li>
                                <RegisterButton
                                    onClick={() => history.push("/register")}
                                >
                                    Register
                                </RegisterButton>
                            </li>
                        </React.Fragment>
                    )}
                </div>
            </NavLinks>
        </NavWrapper>
    );
}

export default withRouter(NavBar);
