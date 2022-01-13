import React, {Component, useState} from "react";
import {makeObservable,action, observable, flow, computed, runInAction} from "mobx";
import {observer, useLocalObservable, Observer} from "mobx-react"
const api = (name = "") => {
    return new Promise((resolve) => {
        const length = Math.ceil(Math.random() * 10)
        setTimeout(() => {
            resolve({
                code: 2000,
                data: Array(length).fill(0).map((_, index) => ({name: name + Math.random(), id: index}))
            })
        }, 3000)
    })
}


export default function MobxApp() {
    const state = useLocalObservable(() => ({ //自动将state下的所有的属性改为可响应的
        list :[],
        loading: false,
        get overflow() {
            return this.list.length > 3 //list的长度大于三的时候就会重新计算
        },
        //flow是优雅的处理异步action的方法，所以这里相当于内部的代码也运行在action的作用内
        async onFetch(){
            this.loading = true;
            const {data} = await api();
            this.list = data;
            this.loading = false
        }
    })
    )
    if(state.loading) {
        return (
            <p>loading...</p>
        )
    }
    return (
        <div>
            <Observer>
                {() => (state.list.map((item) => {
                    return <p key={item.id}>{item.name}</p>
                }))}
            </Observer>
            <hr/>
            <button onClick={state.onFetch}>请求数据<Observer>{() => state.list.length}</Observer></button>
        </div>
    )
}