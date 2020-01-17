import services from "../services/services";
export default {
    namespace:'register',
    state:{

    },
    reducer:{

    },
    effects:{
        *register({payload,resolve,reject},{call,put}){
            const res=yield call(services.register['register'],{payload});
            console.log(res,561)
        }
    },
    subscriptions:{

    }
};