import React, { useContext } from "react";
import Search from "../SearchBox/Search";
import { NavLink, withRouter } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import LogoImg from "../../SVGassets/Logo.svg";
import { NavWrapper, Logo, NavLinks, RegisterButton } from "./Nav.styles";

const MyNavLink = ({ children, ...props }) => {
    return (
        <NavLink
            activeStyle={{
                borderBottomColor: "#6C63FF"
            }}
            {...props}
        >
            {children}
        </NavLink>
    );
};
function NavBar({ history }) {
    const { user, dispatch, globalToken } = useContext(UserContext);

    const logoutUser = () => {
        axios
            .get("api/logout", {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("user")).token
                    }`
                }
            })
            .then(res => {
                localStorage.removeItem("user");
                dispatch({ type: "logout" });
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
                    <MyNavLink className="my-link" exact to="/">
                        Home
                    </MyNavLink>
                    {user.isLoggedIn ? (
                        <React.Fragment>
                            <li>
                                <MyNavLink className="my-link" to="/post">
                                    Post
                                </MyNavLink>
                            </li>
                            <li>
                                <MyNavLink className="my-link" to="/dashboard">
                                    Dashboard
                                </MyNavLink>
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
                                <MyNavLink className="my-link" to="/login">
                                    Login
                                </MyNavLink>
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
