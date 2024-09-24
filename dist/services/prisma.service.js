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
exports.PrismaPost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PrismaPost {
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const get = yield prisma.post.findMany();
                return get;
            }
            catch (error) {
                console.log(`Um erro no prisma service foi encontrado ao buscar todos os posts`);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    createPost(_a) {
        return __awaiter(this, arguments, void 0, function* ({ title, description, finished }) {
            try {
                const create = yield prisma.post.create({
                    data: {
                        title,
                        description,
                        finished,
                    },
                });
                return create;
            }
            catch (error) {
                console.log(`Um erro no prisma service foi encontrado ao criar um post`);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    delPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const del = yield prisma.post.delete({
                    where: {
                        id,
                    },
                });
                return del;
            }
            catch (error) {
                console.log(`Um erro no prisma service foi encontrado ao deletar um post`);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    updatedPostById(id, finished) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const complet = yield prisma.post.update({
                    where: {
                        id,
                    },
                    data: {
                        finished,
                    },
                });
                return complet;
            }
            catch (error) {
                console.log(`Um erro no prisma service foi encontrado ao atulizar um post`);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
}
exports.PrismaPost = PrismaPost;
