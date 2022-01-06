import {createSlice} from "@reduxjs/toolkit";
export const counterSlice = createSlice({ // 调用此函数会返回一个reducer 和actions
    name: "counter", //命名空间，调用action的的时候会默认的设置为action的前缀
    initialState: { //state初始值
      count: 1,
      title: "redux tookit pre"
    },
    reducers: { //这里的属性会自动导出为actions,在组件中可以直接通过dispatch进行触发
      increament(state, {payload}){ //这里需要加上{}否则payload指的是actions的返回对象
          console.log(state, "----")
          console.log(payload, "====")
        //   console.log(action)
          state.count = state.count + payload.step //内置了immutable，不可改变的，不需要导出新的{}
      },
      decreament(state) {
        state.count = state.count -1
      }
    }
})
// export const {initialState: countState} =  counterSlice.initialState;
//导出actions
export const {increament, decreament} = counterSlice.actions;
//内置了thunk插件，可以直接处理异步请求
export const asyncIncreament = function(payload) {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(increament(payload))
        }, 2000)
    }
}
export default counterSlice.reducer;