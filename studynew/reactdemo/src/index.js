import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from "react-redux";
// // import counterStore from "./pages/redux/store/storeIndex.js"
// import userStore  from "./pages/redux-react/store/index"
// import ReduxUseReducerApp from "./ReduxUseReducerApp"
import './index.css';
import MobxApp from "./pages/mobx/MobxApp"
import lazy from "./pages/lazy/lazy"
const LazyComponent = lazy(() => import ("./pages/lazy/LazyApp"))
// import HookApp from "./pages/hooks/HookApp"
// import {CreateProvide} from "./pages/useContextAndUseReducer/UseContextApp"

// import ChildTest1 from "./pages/useContextAndUseReducer/ChildTest1"
// import ChildTest2 from "./pages/useContextAndUseReducer/ChildTest2"
// import UseMemoApp from "./pages/useMemo/UseMemoApp"
// import {BrowserRouter} from "react-router-dom"
// import App from "./App"
// import "antd/dist/antd.css"
// const store =counterStore({
  
// })
// import ProjectTestApp from "./ProjectTestApp"
// const store = userStore({
//   user: {
//     nickName: "张张张",
//     loading: false,
//     isLogin: false
//   }
// })
ReactDOM.render(
  <div>
   {/* <CreateProvide>
     <ChildTest1/>
     <ChildTest2/>
  </CreateProvide> */}
  <LazyComponent/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
