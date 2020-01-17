// model模块 MVC中的M数据的增删改查
const mongoose=require("../utils/database");
// 设置数据库字段
const User=mongoose.model("stu",{
    username:String,
    password:String,
    status:Boolean,
    registerTime:Number,
    name:String,
    urlPic:String
})
// 查找单个用户的信息
const userFind=(userInfo)=>{
    return User.findOne(userInfo);
}
// 保存用户信息
const userSave=(userInfo,cb)=>{
    let user=new User(userInfo);
    return user.save()
}
const userPass=(id)=>{
    return  User.findOne({_id:id});
}

const updatePass=(id,newpassword)=>{
    return  User.update({_id:id},{password:newpassword})
}
const UpdatePic=(name,urlPic)=>{
    return User.update({name:name},{$set:{urlPic:urlPic}});
}
// 查询单个用户信息接口
const userInter=(id)=>{
    return User.findOne({_id:id});
}


module.exports={
    userFind,
    userSave,
    userPass,
    updatePass,
    UpdatePic,
    userInter
}