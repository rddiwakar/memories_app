import React, {useState, useEffect} from "react";
import { createPost, fetchPosts, updatePost } from "../../api/index.js";

const Form = ({ fetchPostsData, updateFormInfo }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(updateFormInfo);
    }, [updateFormInfo]);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFormData = {
            creator: "",
            title: "",
            message: "",
            tags: "",
        }

        if (formData._id) {
            console.log("update");
            updatePost(formData._id, formData).then(() => fetchPostsData()).then(setFormData(emptyFormData));
        } else {
            console.log("create");
            createPost(formData).then(() => fetchPostsData()).then(setFormData(emptyFormData));
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="creator" placeholder="Creator" onChange={handleChange} value={formData.creator} /><br />
            <input name="title" placeholder="Title" onChange={handleChange} value={formData.title} /><br />
            <input name ="message" placeholder="Message" onChange={handleChange} value={formData.message} /> <br/>
            <input name ="tags" placeholder="Tags" onChange={handleChange} value={formData.tags} /> <br />
            <br/>
            <span>
                <button type="submit">Submit</button>
            </span>
            
        </form>
    )
}
export default Form;