import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface POST {
    title: string;
    description: string | null;
    finished: boolean;
}

export class PrismaPost {
    async getAllPosts() {
        try {
            const get = await prisma.post.findMany();
            return get;
        } catch (error) {
            console.log(
                `Um erro no prisma service foi encontrado ao buscar todos os posts`
            );
            await prisma.$disconnect();
            process.exit(1);
        }
    }

    async createPost({ title, description, finished }: POST) {
        try {
            const create = await prisma.post.create({
                data: {
                    title,
                    description,
                    finished,
                },
            });
            return create;
        } catch (error) {
            console.log(
                `Um erro no prisma service foi encontrado ao criar um post`
            );
            await prisma.$disconnect();
            process.exit(1);
        }
    }

    async delPostById(id: number) {
        try {
            const del = await prisma.post.delete({
                where: {
                    id,
                },
            });
            return del;
        } catch (error) {
            console.log(
                `Um erro no prisma service foi encontrado ao deletar um post`
            );
            await prisma.$disconnect();
            process.exit(1);
        }
    }

    async updatedPostById(id: number, finished: boolean) {
        try {
            const complet = await prisma.post.update({
                where: {
                    id,
                },
                data: {
                    finished,
                },
            });
            return complet;
        } catch (error) {
            console.log(
                `Um erro no prisma service foi encontrado ao atulizar um post`
            );
            await prisma.$disconnect();
            process.exit(1);
        }
    }
}
