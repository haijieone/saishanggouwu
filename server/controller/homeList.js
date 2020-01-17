const homeModel=require("../model/homeList");
// 首尔商品列表
const homeList =async(req,res)=>{
    let {page,limit}=req.body
    let data=await homeModel.homelist(page,limit);
    if(data.length>0){
        res.json({
            code:200,
            errMsg:'',
            data:{
                data:data,
                status:1
            }
        })
    }else{
        res.json({
            code:200,
            errMsg:'',
            data:{
                data:[],
                status:0
            }
        })
    }
}
// 详情页
const detail=async(req,res)=>{
 let {id}=req.query;
 console.log(req.query)
    let data=await homeModel.detail(id);
    if(data){
        res.json({
            code:200,
            errMsg:'',
            data:{
                data:data,
                status:1
            }
        })
    }
}
// 购物车
const cart=async(req,res)=>{
  let {Arrays}=req.query;
    let arr=JSON.parse(Arrays)
    let data=await homeModel.cart(arr)
    if(data){
        res.json({
            code:200,
            Msg:"数据读取成功",
            data:data,
            status:"ok"
        })
    }
}
module.exports={
    homeList,
    detail,
    cart,
}