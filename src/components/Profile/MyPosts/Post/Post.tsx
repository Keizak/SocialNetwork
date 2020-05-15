import React from "react";
import style from './Post.module.css';

function Post() {
    return (
        <div className={style.body}>
            <div className={style.ava}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5Z6WwUSg8wswj_7lRkyRE2hO_Tm3MGpL-vTwmntacqOqMbW6W&usqp=CAU"/>
            </div>
            <div className={style.post_content}>
                Oy it is my first post,O my god !!!
                <span>   Likes  36</span>
            </div>
        </div>


    )
};
export default Post;