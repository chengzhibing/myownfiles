import React, { Component } from "react";
import { useEffect } from "react";
//组件内部，可以通过useSelector, useDispatch直接获取state和dispatch方法
import { useSelector, useDispatch } from "react-redux"
import { decreament,increament, asyncIncreament } from "./pages/redux/actions-reducer/counter/counterSlice.js"

function ReduxApp() {
    const { count } = useSelector(function(state) {
        console.log(state)
        return state.counter
    }) //counter?
    console.log(count)
    const dispatch = useDispatch();
    return (
        <div className="ReduxApp">
            <button onClick={() => { dispatch(increament({step: 1})) }}>{count}</button>
            <hr />
            <button onClick={() => { dispatch(asyncIncreament({ step: 1 })) }}>{count}</button>
        </div>
    )
}
export default ReduxApp;