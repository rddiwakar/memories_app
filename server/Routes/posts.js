import express from "express";
import { getPost,createPost, deletePost, updatePost} from "../Controller/posts.js";

const router = express.Router();

router.get("/", getPost );
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
