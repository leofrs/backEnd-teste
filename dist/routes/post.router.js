"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
exports.postRouter = (0, express_1.Router)();
const postController = new post_controller_1.PostController();
exports.postRouter.get("/api/v1/getAllPosts", postController.getAllPosts);
exports.postRouter.post("/api/v1/createPost", postController.createPost);
