import React from "react";
import style from './css.module.css';
import MyWall from "./MyPosts/MyPosts";

function Profile()
{
    return (
        <div >
            <div>
                <img src="https://st4.depositphotos.com/2370557/25367/i/450/depositphotos_253671208-stock-photo-soft-wave-blue-ocean-sandy.jpg" />
            </div>

            <div>Ava + discription</div>
            <MyWall />
        </div>
    )
};
export default Profile;