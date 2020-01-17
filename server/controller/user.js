const userModel = require("../model/user");
const tokenUtils = require("../utils/token")
// 引入加密模块
const crypto = require('crypto');

// 用户注册判断
const userRegister = async (req, res) => {
    let { username, password } = req.body;
    console.log(156)
    let data = await userModel.userFind({ username });
    if (data) {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "用户名重复",
                status: 2
            }
        })
    } else {
        // 创建加密算法
        const hash = crypto.createHash("sha256");
        // 对数据进行加密
        hash.update(password);

        // 用户登陆状态
        let status = true;
        // 用户注册时间
        let registerTime = new Date().getTime();
        // 用户的随机名称
        let name = Math.random().toString(36).substr(2, 8);
        // 默认用户头像
        let urlPic = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574006038112&di=43d970dc85af19b2a9e145e633be6bf2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F02%2F20140902101956_RxeuM.jpeg";
        let saveData = await userModel.userSave({ username, password: hash.digest("hex"), status, registerTime, name, urlPic });
        if (saveData) {
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: "注册成功",
                    status: 1
                }
            })
        }
    }
}
// 用户修改密码判断

// 用户登陆判断
const userLogin = async (req, res) => {
    // 得到username 和password
    let { username, password } = req.body;
    // 查看用户名是否存在
    let userData = await userModel.userFind({ username });
    console.log(userData)
    if (userData) {//如果存在
        /* 
            进行密码和用户名的校验
            密码在数据库中已经加密，
            所以要将密码进行同样的加密在进行比较

         */
        if (userData.status) {
            // 创建加密算法
            const hash = crypto.createHash("sha256");
            // 对数据进行加密
            hash.update(password);
            // 拿到加密后的数据
            // console.log(hash.digest("hex"))
            // 当密码加密以后与数据库密码相同时
            if (userData.password == hash.digest("hex")) {
                // 当登陆成功时候生产token值 并且发送到客户端
                let token = tokenUtils.sendToken({ username });
                res.cookie("token", token)
                res.json({
                    code: 200,
                    errMsg: "",
                    data: {
                        info: "登陆成功",
                        code: 1,
                        data: userData
                    }
                })
            } else {
                res.json({
                    code: 200,
                    errMsg: "",
                    data: {
                        info: "密码错误",
                        code: 2
                    }
                })
            }
        } else {
            res.json({

            })
        }

    } else {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "用户名不存在",
                code: 0
            }
        })
    }
}

//修改密码
const userPassword = async (req, res) => {
    let { id, oldpassword, newpassword } = req.body;
    let data = await userModel.userPass(id);//给model传参
    // console.log(id,oldpassword, newpassword );//验证路由是否走通
    // console.log(data)
    const hash1 = crypto.createHash('sha256');
    // //加密 3、对数据进行加密
    hash1.update(oldpassword);
    // // console.log(oldpassword)
    if (data.password == hash1.digest('hex')) {
        const newhash = crypto.createHash('sha256');
        // //加密 3、对数据进行加密
        newhash.update(newpassword);
        let pass = newhash.digest('hex')
        let updatedata = userModel.updatePass(id, pass);
        console.log(updatedata)
        if (updatedata) {
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: "密码修改成功",
                    status: 1,
                    data: data
                }
            })
        }else{
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: "密码修改失败",
                    status: 0
                }
            })
        }
    }else{
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "原密码错误",
                status: 1,
            }
        })
    }
}
// 用户头像
const userPic = async (req, res) => {
    let {Logo,name } = req.body;
    // console.log(Logo,name)
    let data = await userModel.UpdatePic(name, Logo);
    if (data.ok=1) {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "修改头像成功",
                status:1
            }
        })
    } else {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "修改失败",
                status:0
            }
        })
    }
}
// 用户信息管理
const userInter = async (req, res) => {
    let {id } = req.body;
    console.log(id)
    let data = await userModel.userInter(id);
    if (data) {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                list:data,
                status:1
            }
        })
    } else {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                list:[],
                status:0
            }
        })
    }
}

module.exports = {
    userRegister,
    userLogin,
    userPassword,
    userPic,
    userInter
}