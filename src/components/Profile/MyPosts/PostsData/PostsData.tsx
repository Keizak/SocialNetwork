import React from "react";
import Post from "../Post/Post";


export let avasrc =<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5Z6WwUSg8wswj_7lRkyRE2hO_Tm3MGpL-vTwmntacqOqMbW6W&usqp=CAU" />

export  type PostType =
    {
        photo: any;
        content: string,
        likes: number;
        id:number;
    }
export let PostElements = [
    {id:1,photo:avasrc, content:'я хуй', likes:34},
    {id:2,photo:avasrc, content:'я голова', likes:5},
    {id:3,photo:avasrc, content:'я нога', likes:4}
]
export let postsElements = PostElements.map((post) => <Post id={post.id} photo={post.photo} content={post.content} likes={post.likes} />)