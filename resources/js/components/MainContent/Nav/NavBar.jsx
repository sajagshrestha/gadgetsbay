import React, { useContext, useState } from "react";
import Search from "../SearchBox/Search";
import { NavLink, withRouter } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import LogoImg from "../../SVGassets/Logo.svg";
import {
    NavWrapper,
    DropDown,
    LogoutButton,
    Logo,
    NavLinks,
    RegisterButton
} from "./Nav.styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const MyNavLink = ({ children, ...props }) => {
    return (
        <NavLink
            activeStyle={{
                color: "black",
                fontWeight: "bold"
            }}
            {...props}
        >
            {children}
        </NavLink>
    );
};
function NavBar({ history }) {
    const { user, dispatch } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const logoutUser = () => {
        setOpen(false);
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
                                <LogoutButton
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setOpen(!open)}
                                >
                                    {user.name}
                                    <ArrowDropDownIcon />
                                </LogoutButton>
                                {open && (
                                    <DropDown onClick={logoutUser}>
                                        <div className="logout">Logout</div>
                                    </DropDown>
                                )}
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
                                    color="primary"
                                    variant="contained"
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
