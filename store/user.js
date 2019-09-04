// 用户管理
export const state={
    // 用户数据
    userInfo:{
        token:'',
        user:{}
        
    }
}

export const mutations={
    // 设置用户信息,state固定参数
    setUserInfo(state,data){
        // data后台返回的用户信息
        state.userInfo=data;
    }
}