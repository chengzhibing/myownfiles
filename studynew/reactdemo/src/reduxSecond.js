import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
// import store from "./pages/redux/store/storeIndex.js"
import userStore from "./pages/redux-react/store";
import ReduxSecondApp from "./ReduxSecondApp"
import './index.css';
// import {BrowserRouter} from "react-router-dom"
// import App from "./App"
// import "antd/dist/antd.css"

// import ProjectTestApp from "./ProjectTestApp"
// import ReduxApp from "./ReduxApp"
const store = userStore({
  user: { //1、初始值，2、修改在actions的updateuserinfo,3、异步请求完毕调用actions中的loginRequest返回数据
    isLogin: false,
    loading: false,
    nickName: "zhang"
  }
})
ReactDOM.render(
  <Provider store={store}>
    < ReduxSecondApp/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
