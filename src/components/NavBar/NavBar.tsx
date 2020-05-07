import React from "react";
import style from './css.module.css';

function NavBar()
{
    return (
        <nav className={style.nav}>
            <div className={style.items}><a href="/Profile">Profile</a></div>
            <div className={style.items}><a href="/Dialogs">Messages</a></div>
            <div className={style.items}><a href="/News">News</a></div>
            <div className={style.items}><a href="/Music">Music</a></div>
            <div className={style.items}><a href="/Settings">Settings</a></div>
        </nav>
    )
};
export default NavBar;