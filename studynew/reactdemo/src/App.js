// import './App.css';
import React, {Component} from "react";
import styles from "./App.moudle.css"
// import {Routes, Route} from "react-router-dom"
// import ButtonRouter from "./pages/router/ButtonRouter"
// import ListRouter from "./pages/router/ListRouter"
// import AxiosTest from "./pages/ajax/AxiosTest"
class App extends Component{
  render() {
    return (
        <div className={styles.box}>
          {/* <AxiosTest/> */}
          {/* <Routes>
            <Route path="/button" element={<ButtonRouter/>}/>
            <Route path="/list/:id" element = {<ListRouter/>}/>
          </Routes> */}
        </div>
      
      )
  }
}

export default App;
