import React from "react";
import style from './css.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
};
export default Profile;