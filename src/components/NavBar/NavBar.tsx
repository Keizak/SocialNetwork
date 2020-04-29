import React from "react";
import classes from './NavBar.module.css';

function NavBar()
{
    return (
        <nav className={classes.nav}>
            <div className={classes.items}><a>Profile</a></div>
            <div className={classes.items}><a>Messages</a></div>
            <div className={classes.items}><a>News</a></div>
            <div className={classes.items}><a>Music</a></div>
        </nav>
    )
};
export default NavBar;