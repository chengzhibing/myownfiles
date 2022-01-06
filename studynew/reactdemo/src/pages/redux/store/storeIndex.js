//创建store
import {configureStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'
import ActionAndReducer from "../actions-reducer/counter/counterSlice.js"
export default function counterStore(initState) {
    console.log(initState)
    return configureStore({
        reducer: {
            counter: ActionAndReducer,
            movie: ""
        }
    }, initState, composeWithDevTools())
}