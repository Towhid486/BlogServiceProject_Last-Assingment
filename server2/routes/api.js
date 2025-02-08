import express from "express";
const router = express.Router();
import * as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js"
import * as TeamController from "../app/controllers/TeamController.js";
import * as ServiceController from "../app/controllers/ServiceController.js";
import * as BlogController from "../app/controllers/BlogController.js";
import {TeamDetails} from "../app/controllers/TeamController.js";

//Users
router.post("/Login",UsersController.Login)
router.get("/UserLogout",AuthMiddleware,UsersController.UserLogout)



//Team Member
router.get("/TeamList",TeamController.TeamList)
router.get("/MemberDetails/:id",TeamController.TeamDetails)
router.post("/CreateMember",AuthMiddleware,TeamController.CreateMember)
router.post("/UpdateMember/:id",AuthMiddleware,TeamController.UpdateMember)
router.get("/DeleteMember/:id",AuthMiddleware,TeamController.DeleteMember)



//Service
router.get("/ServiceList",ServiceController.ServiceList)
router.get("/ServiceDetails/:id",ServiceController.ServiceDetails)
router.post("/CreateService",AuthMiddleware,ServiceController.CreateService)
router.post("/UpdateService/:id",AuthMiddleware,ServiceController.UpdateService)
router.get("/DeleteService/:id",AuthMiddleware,ServiceController.DeleteService)


//Blog
router.get("/BlogList",BlogController.BlogList)
router.get("/BlogDetails/:id",BlogController.BlogDetails)
router.post("/CreateBlog",AuthMiddleware,BlogController.CreateBlog)
router.post("/UpdateBlog/:id",AuthMiddleware,BlogController.UpdateBlog)
router.get("/DeleteBlog/:id",AuthMiddleware,BlogController.DeleteBlog)




export default router;


