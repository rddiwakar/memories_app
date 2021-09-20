import  useStyles  from "./styles.js";
import Post from "./post/post.js";

const Posts = ({posts, fetchPostsData, updateFormData})=>{
    const classes = useStyles()
    return(
        
        <div className={classes.smMargin}>
        {
            posts.map(post => (
               <Post key={post._id} post = {post} fetchPostsData={fetchPostsData} updateFormData={updateFormData}/>
            ))
        }
        
        </div>

    )
}
export default Posts;