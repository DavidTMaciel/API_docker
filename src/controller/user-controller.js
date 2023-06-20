import { createUser } from "../repositorys/user.repositor";

export const create = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};