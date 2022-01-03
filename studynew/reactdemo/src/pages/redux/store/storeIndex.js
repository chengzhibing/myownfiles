//创建store
import {configureStore} from "@reduxjs/toolkit";
import ActionAndReducer from "../actions-reducer/counter/counterSlice.js"
export default configureStore({
    reducer: {
        counter: ActionAndReducer,
        movie: ""
    }
})