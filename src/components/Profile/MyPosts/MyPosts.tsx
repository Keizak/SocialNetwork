import React from "react";
import style from './css.module.css';
import Post from "./Post/Post";

function MyWall()
{
    return (
        <div className={style.wall}>
            <div>My posts</div>
            <div className={style.newpost}>
                <textarea></textarea><button>New Posts</button>
            </div>

            <div className={style.posts}>My posts
                <Post />
                <Post />

            </div>

        </div>

    )
};
export default MyWall;