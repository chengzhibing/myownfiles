import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import counterStore from "./pages/redux/store/storeIndex.js"


import ReduxApp from "./ReduxApp"
import './index.css';
// import {BrowserRouter} from "react-router-dom"
// import App from "./App"
// import "antd/dist/antd.css"
const store =counterStore({
  
})
// import ProjectTestApp from "./ProjectTestApp"

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
