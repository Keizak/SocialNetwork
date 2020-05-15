import React from "react";
import style from './css.module.css';
import { NavLink } from "react-router-dom";

function NavBar()
{
    return (
        <nav className={style.nav}>
            <div className={style.items}><NavLink to="/Profile">Profile</NavLink></div>
            <div className={style.items}><NavLink to="/Dialogs">Messages</NavLink></div>
            <div className={style.items}><NavLink to="/News">News</NavLink></div>
            <div className={style.items}><NavLink to="/Music">Music</NavLink></div>
            <div className={style.items}><NavLink to="/Settings">Settings</NavLink></div>
        </nav>
    )
};
export default NavBar;