import Routes from "express"
import { signup,login,getUserInfo } from "../controllers/authContoller.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const authRoutes = Routes();


authRoutes.post("/signup",signup);
authRoutes.post("/login",login);
authRoutes.get("/userInfo",verifyToken,getUserInfo)

export default authRoutes;