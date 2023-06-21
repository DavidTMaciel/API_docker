import { createUser,UpdateUser } from "../repositorys/user.repositor";
import bcrypt from "bcrypt";
import { userValidation } from "../validations/validations";


export const create = async (req, res) => {
    try {

        await userValidation.validate(req.body);

        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword;
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    
    }
};
