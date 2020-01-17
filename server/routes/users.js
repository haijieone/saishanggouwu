// 引入依赖
var express = require('express');
// 调用express中的router函数
var router = express.Router();
const userController=require("../controller/user")
// 注册接口
router.post("/register",userController.userRegister);
// 登陆接口
router.post("/login",userController.userLogin)
router.post("/password",userController.userPassword)
router.post("/urlPic",userController.userPic)
// 用户管理接口
router.post("/Inter",userController.userInter)


module.exports = router;
