import { useState, useEffect } from "react";

import {Grid} from "@material-ui/core";
import Posts from "./posts/posts.js";
import Form from "./form/form.js";
import { fetchPosts } from "../api/index.js";


function HomeDisplay() {
    const [posts, setPosts] = useState([]);
    const [updateFormInfo, setUpdateFormInfo] = useState({});

    function updateFormData(data) {
        setUpdateFormInfo(data);
    }
    
    function fetchPostsData() {
        fetchPosts()
        .then(res => {
            setPosts(res.data);
        })
    }

    useEffect(() => {
        fetchPostsData();
    }, []);

    return (
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
            <Posts posts={posts} fetchPostsData={fetchPostsData} updateFormData={updateFormData} />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Form fetchPostsData={fetchPostsData} updateFormInfo={updateFormInfo} />
            </Grid>
        </Grid>
    );
}

export default HomeDisplay;