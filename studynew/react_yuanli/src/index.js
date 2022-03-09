import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import JsxApp from './JsxApp';
// import {UseStateApp} from './UseStateApp';
import PropsFormApp from './HOCRenderJieChiApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PropsFormApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
