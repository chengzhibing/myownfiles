import userReducer from "../reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore,applyMiddleware,compose} from "redux";

import thunkMiddleware from "redux-thunk"

export default function userStore(initState) {
   return createStore(userReducer, initState, compose(applyMiddleware(thunkMiddleware)))
}