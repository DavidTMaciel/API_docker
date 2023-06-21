import { prisma } from "../services/prisma"

export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            created_at: true,
            updated_at: true
        }
    })
    return user;
}

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            created_at: true,
            updated_at: true
        }
    });
    return users;
}

export const getUser = async (id) => {
    const user = await prisma.user.findUnique({
        where: {id}, select: {
            id: true,
            name: true,
            email: true,
            password: false,
            phone: true,
            created_at: true,
            updated_at: true
        }
    })
    return user;
}