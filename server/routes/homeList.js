var express = require('express');
// 调用express中的router函数
var router = express.Router();

const homeController=require("../controller/homeList");

router.post("/home",homeController.homeList)
router.get("/detail",homeController.detail)
router.get("/cart",homeController.cart)

module.exports = router;