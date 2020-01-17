import services from "../services/services";
export default {
    namespace: 'home',
    state: {
        newList: '',
    },
    reducers: {
        setNewList(state, { payload }) {
            let { newList } = payload;
            return { ...state, newList }
        }
    },
    effects: {
        *goods({ payload, resolve, reject }, { call, put }) {
            const res = yield call(services.data_page['list'], { payload });
            if (res.err) {
            } else {
               
                let msg = res.data.data.goods;
                 let payload={
                     newList:msg,

                 };
                yield put({ type: "setNewList" , payload})
            }
        },
        *homeData({payload,resolve,reject},{call,put}){
            const res=yield call(services.homeList['homeList'],{payload});
            if(res.data.data){
                let shopList=res.data.data;
                let payload={
                    newList:shopList,
                }
                yield put ({type:'setNewList',payload})
            }else{

            }
        },
        *detail({payload,resolve,reject},{call,put}){
            const res=yield call(services.detail['detail'],{payload});
            if(res.data.data.status){
                resolve(res.data.data)
            }

        },
        *cart({payload,resolve,reject},{call,put}){
            const res=yield call(services.cart['cart'],{payload});
            resolve(res)
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/home') {
                    // dispatch({
                    //     type:"goods",
                    //     payload:{
                    //         page:1,
                    //         zy_ids:"p8_c4_l4",
                    //         app_name:"zhe",
                    //         catname:"tab_hpzc",
                    //         flag:"tab_hpzc",
                    //     }
                    // })
                }
            })
        }
    }
};