const mongoose=require("../utils/database");

const Home=mongoose.model("homelist",{
    _id:Number,
    img:String,
    price:Number,
    title:String
})

const homelist=(page,limit)=>{
    return Home.find().skip((page - 1) * limit).limit(limit)
}

const detail=(id)=>{
    let _id=Number(id)
return Home.findOne({id:_id})
}
const cart =(arr)=>{
    return Home.find({$or:arr})

}

module.exports={
    homelist,
    detail,
    cart
}
