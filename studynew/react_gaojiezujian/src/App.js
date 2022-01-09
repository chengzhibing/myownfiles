
import Child1 from "./pages/Child1"
import CounterState from "./hooks/CounterState"
import React, { useState, useEffect } from "react"
import ThemeChild from "./context/ThemeChild"
const initPorpsOfCounterState = {
  initCounter: 1
}
const themesInit = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}
export const ThemeContext = React.createContext(themesInit.light)
function App() {
  const [themes, setThemes] = useState(themesInit)
  console.log(themes, "祖先组件，state")
  useEffect(() => {
    console.log(themes, "祖先组件，effect")
  })
  return (
    <ThemeContext.Provider value={{themes: themes["dark"], setThemes}}>
      <div className="App">
        <div>
          <p>--------这里测试context-start--------</p>
           <ThemeChild/> 
           <div><button onClick={() => {}}>点击修改theme中的值</button></div>
           <p>--------这里测试context-end--------</p>
        </div>
        <div>
          <p>这里测试hook-----state</p>
          <CounterState {...initPorpsOfCounterState}/>
          <p>这里测试hook-----end</p>
        </div>
        <Child1/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
