import React from "react";
import classes from './MyPosts.module.css';

function MyPosts()
{
    return (
        <div className={classes.content}>My posts
            <div>New Posts</div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    )
};
export default MyPosts;