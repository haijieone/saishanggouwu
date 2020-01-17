
const {get}=require('../utils/request').default;
const {post_l,get_l}=require("../utils/request_local").default
export default{
    data_page:{
        list:({payload})=>get(`/api/getGoods?page=1&zy_ids=${payload.zy_ids}&app_name=${payload.app_name}&catname=${payload.catname}&flag=${payload.flag}`)
    },  
    homeList:{
        homeList:({payload})=>post_l('/homeList/home',payload)
    },
    detail:{
        detail:({payload})=>get_l(`/homeList/detail?id=${payload.id}`)
    },
    cart:{
        cart:({payload})=>get_l(`/homeList/cart?Arrays=${payload.Arrays}`)
    }

}

