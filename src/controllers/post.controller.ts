import { Request, Response } from "express";
import { PrismaPost } from "../services/prisma.service";
import { Post } from "@prisma/client";
const prismaPost = new PrismaPost();

export class PostController {
    async getAllPosts(req: Request, res: Response) {
        try {
            const get = await prismaPost.getAllPosts();
            if (get) {
                res.status(200).json(get);
            } else {
                res.status(301).json(
                    "Um erro foi detectado ao buscar todos os posts. Tente novamente mais tarde"
                );
            }
        } catch (error) {
            res.status(501).json(`Error interno encontrado: ${error}`);
        }
    }

    async createPost(req: Request, res: Response) {
        const { title, description, finished } = req.body as Post;
        if (!title && !finished) {
            res.status(301).json("Titulo e finished estão faltando");
        }
        try {
            const create = await prismaPost.createPost({
                title,
                description,
                finished,
            });
            if (create) {
                res.status(200).json("Post criado com sucesso!");
            } else {
                res.status(301).json(
                    "Um erro foi detectado ao criar um post. Tente novamente mais tarde"
                );
            }
        } catch (error) {
            res.status(501).json(`Error interno encontrado: ${error}`);
        }
    }
}
