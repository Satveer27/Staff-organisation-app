import { userLoginController, userRegistrationController } from "../controller/userController.js";
import isAdmin from "../middleware/isAdmin.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import express from "express";

const userRouter = express.Router();

userRouter.post('/register', isLoggedIn , isAdmin, userRegistrationController);
userRouter.post('/login', userLoginController);

export default userRouter;
