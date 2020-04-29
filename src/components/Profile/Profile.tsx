import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile()
{
    return (
        <div className={classes.content}>
            <div>
                <img src="https://st4.depositphotos.com/2370557/25367/i/450/depositphotos_253671208-stock-photo-soft-wave-blue-ocean-sandy.jpg" />
            </div>
            <div>
                Main Content
            </div>

            <div>Ava + discription</div>
            <MyPosts />
        </div>
    )
};
export default Profile;