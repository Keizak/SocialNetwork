import React from "react";
import style from './Post.module.css';
import {PostType} from "../PostsData/PostsData";


function Post(props:PostType) {
    return (
        <div className={style.body}>
            <div className={style.ava}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5Z6WwUSg8wswj_7lRkyRE2hO_Tm3MGpL-vTwmntacqOqMbW6W&usqp=CAU"/>
            </div>
            <div className={style.post_content}>
                {props.content}
                <span>{props.likes}</span>
            </div>
        </div>


    )
};
export default Post;