import { Router } from "express";
import { PostController } from "../controllers/post.controller";

export const postRouter = Router();
const postController = new PostController();

postRouter.get("/api/v1/getAllPosts", postController.getAllPosts);
postRouter.post("/api/v1/createPost", postController.createPost);
