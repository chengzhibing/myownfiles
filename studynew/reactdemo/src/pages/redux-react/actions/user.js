import {LOGIN, LOGOUT, UPDATEUSERINFO} from "../contains/user.js"
const loginRequest = ()=> {
    console.log("正在登录？？？、")
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(updateuserinfo({
               loading: false,
               nickName: "hello",
               isLogin: true
            }))
        }, 3000)
    })
}
export const login = (payload) => {
    return async function(dispatch) {
        dispatch(updateuserinfo({
            loading: true,
            nickName: "cheng"
        }))
        const res = await loginRequest();
        dispatch(res)
    }
}
export const logout = (payload) => {
    return {
        type: LOGOUT,
        payload
    }
}
export const updateuserinfo = (payload) => {
    return {
        type: UPDATEUSERINFO,
        payload
    }
}