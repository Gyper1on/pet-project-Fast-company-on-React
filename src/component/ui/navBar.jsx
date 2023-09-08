import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css"

const NavBar = () => {

    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Войти</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Все пользователи</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
