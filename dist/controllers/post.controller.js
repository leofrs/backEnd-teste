"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const prisma_service_1 = require("../services/prisma.service");
const prismaPost = new prisma_service_1.PrismaPost();
class PostController {
    getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const get = yield prismaPost.getAllPosts();
                if (get) {
                    res.status(200).json(get);
                }
                else {
                    res.status(301).json("Um erro foi detectado ao buscar todos os posts. Tente novamente mais tarde");
                }
            }
            catch (error) {
                res.status(501).json(`Error interno encontrado: ${error}`);
            }
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, finished } = req.body;
            if (!title && !finished) {
                res.status(301).json("Titulo e finished estão faltando");
            }
            try {
                const create = yield prismaPost.createPost({
                    title,
                    description,
                    finished,
                });
                if (create) {
                    res.status(200).json("Post criado com sucesso!");
                }
                else {
                    res.status(301).json("Um erro foi detectado ao criar um post. Tente novamente mais tarde");
                }
            }
            catch (error) {
                res.status(501).json(`Error interno encontrado: ${error}`);
            }
        });
    }
}
exports.PostController = PostController;
