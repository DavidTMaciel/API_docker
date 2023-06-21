import { create } from "../controller/user-controller";
import { listUsers } from "../controller/user-controller";
import { listUser } from "../controller/user-controller";

const userRoutes = app =>{
    app.post("/user", create)
    app.get("/users", listUsers)
    app.get("/user/:id", listUser)
};

export default userRoutes;