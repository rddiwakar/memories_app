import React from "react";
import  useStyles  from "./style.js";
import {deletePost} from "../../../api/index.js";

const Post = ({post, fetchPostsData, updateFormData})=>{
    function deletePostData(id){
        console.log("delete clicked");
        deletePost(id)
        .then(res => fetchPostsData())
        .catch(error=>console.log(error))
    }


    const classes = useStyles()
    return(
        <div >
            <span>
                <button onClick={() => deletePostData(post._id)}>delete</button>
                <button onClick={() => updateFormData(post)}>Edit</button>
            </span>
            {/* <img src ={post.image} alt="fsaf"/> */}
            <h4 >{post.creator || "No title available"}</h4>
            <h4>{post.title || "No creator available"}</h4>
            <h4 >{post.tags || "No title available"}</h4>
            <h4 >{post.message || "No title available"}</h4>
            <br />
            <hr />  

        </div>
    )
}
export default Post