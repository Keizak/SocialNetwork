import React from "react";
import style from './css.module.css';
import {postsElements} from "./PostsData/PostsData";

function MyPosts()
{
    return (
        <div className={style.wall}>
            <div>My posts</div>
            <div className={style.newpost}>
                <textarea></textarea><button>New Posts</button>
            </div>

            <div className={style.posts}>My posts
                {postsElements}
            </div>

        </div>

    )
};
export default MyPosts;