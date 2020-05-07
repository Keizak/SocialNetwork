import React from "react";
import style from './css.module.css';
import Post from "./Post/Post";

function MyWall()
{
    return (
        <div className={style.wall}>My wall
            <div className={style.new}>New Posts</div>
            <div className={style.posts}>My posts
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

        </div>

    )
};
export default MyWall;