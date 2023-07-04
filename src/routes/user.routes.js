import { create} from "../controller/user-controller";
import { deleteUserId } from "../controller/user-controller";
import { listUser } from "../controller/user-controller";
import { listUsers } from "../controller/user-controller";
import { update } from "../controller/user-controller";

const userRoutes = app =>{
    app.post("/user", create)
    app.get("/users", listUsers)
    app.get("/user/:id", listUser)
    app.put("/user/update/:id", update)
    app.delete("/user/delete/:id", deleteUserId)
};

export default userRoutes;