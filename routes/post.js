import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/news", getPosts);
router.post("/news", createPost);
router.patch("/news/:id", updatePost);
router.delete("/news/:id", deletePost);
router.patch("/news/:id/likePost", likePost);
router.get("/event", getPosts);
router.post("/event", createPost);
router.patch("/event/:id", updatePost);
router.delete("/event/:id", deletePost);
router.patch("/event/:id/likePost", likePost);
router.get("/notice", getPosts);
router.post("/notice", createPost);
router.patch("/notice/:id", updatePost);
router.delete("/notice/:id", deletePost);
router.patch("/notice/:id/likePost", likePost);
export default router;
