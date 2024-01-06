import { userLoginController, userRegistrationController, getAllUserController, updateUserController, getLeaderOrgChart, getOrgChartEmployee } from "../controller/userController.js";
import isAdmin from "../middleware/isAdmin.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import express from "express";

const userRouter = express.Router();

userRouter.post('/register', isLoggedIn , isAdmin, userRegistrationController);
userRouter.post('/login', userLoginController);
userRouter.get('/allUsers', isLoggedIn , isAdmin, getAllUserController);
userRouter.put('/:id/updateUsers', updateUserController);
userRouter.get('/orgChart',getLeaderOrgChart);
userRouter.get('/orgChart/:id',getOrgChartEmployee);

export default userRouter;
