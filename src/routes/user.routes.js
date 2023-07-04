import { create, deleteUserId, listUsers, listUser, update } from "../controller/user-controller";

const userRoutes = app =>{
    app.post("/user", create)
    app.get("/users", listUsers)
    app.get("/user/:id", listUser)
    app.put("/user/update/:id", update)
    app.delete("/user/delete/:id", deleteUserId)
};

export default userRoutes;