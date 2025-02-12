import express from "express";
const router = express.Router();
import * as UsersController from "../controllers/UsersController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js"
import * as TeamController from "../controllers/TeamController.js";
import * as ServiceController from "../controllers/ServiceController.js";
import * as BlogController from "../controllers/BlogController.js";
import * as FileUploaderController from "../controllers/FileUploaderController.js";
import upload from "../middlewares/FileUpload.js"


//Users
router.post("/Login",UsersController.Login)
router.get("/UserLogout",AuthMiddleware,UsersController.UserLogout)


// File Upload API
router.post(
    "/file-upload",
    upload.array("file",20),
    FileUploaderController.fileUpload
)

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


