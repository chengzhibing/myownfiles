import './App.css';
// import FunctionModule from "./pages/test/FunctionModule.js"
// import ClassModule from "./pages/test/ClassModule.js" 
import SetState from "./pages/test/SetState"
// import Cycle from "./pages/test/Cycle"
// import HookTest from "./pages/test/HookTest.js"
// import DecoritorTest from "./pages/test/DecoritorTest.js"
import CartGoods from "./pages/test/CartGoods.js"
function App() {
  let counter = 0;
  function changeNum() {
    counter +=1;
    console.log(counter)
  }
  return (
    <div className="App">
      <CartGoods/>
      {/* <button onClick={changeNum}>点击</button>
      <Cycle counter={counter}/> */}
     {/* <FunctionModule name="FunctionModule"/>
     <ClassModule name ="ClassModule"/> */}
    </div>
  );
}

export default App;
