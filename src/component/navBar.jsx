import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"

const NavBar = () => {

    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Main</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
