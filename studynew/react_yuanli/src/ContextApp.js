import React, {createContext, Component, useContext} from "react";
//1=====
const ThemeContext = createContext(null);
const ThemeProvider = ThemeContext.Provider;

//2=====
//provide有两个作用：value传递context,供给Customer使用
//value属性改变，ThemeProvider会让消费Provider value的组件重新渲染

// class Son extends Component{
//   render() {
//       const {color, background} = this.context;
//       return<div style={{color, background}}>消费者</div>
//   }
// }
// //3=====消费 context 之方式一（只用于类组件）
// Son.contextType = ThemeContext;
// function Son() {
//     //4=====消费context之方式二(函数组件)
//     const contextValue = useContext(ThemeContext);
//     const {color, background} = contextValue;
//     return<div style={{color, background}}>
//        消费者
//     </div>
// }
//5=====消费context之方式三
const ThemeConsumer = ThemeContext.Consumer; //订阅消费者
function ConsumerDemo(props) {
  const {color, background} = props;                                                                               
  return<div style={{color, background}}>消费着</div>
}
function Son() {
    return <ThemeConsumer>
    { /* 将 context 内容转化成 props  */ }
    { (contextValue)=> <ConsumerDemo  {...contextValue}  /> }
 </ThemeConsumer>
}

export default function ProviderDemo() {
    const [contextValue, setContextValue] = React.useState({color: "#ccc", background: "pink"})
    return<div>
        <ThemeProvider value={contextValue}>
            <Son></Son>
            <button onClick={()=> {setContextValue({color: "#666", background: "green"})}}>更改主题</button>
        </ThemeProvider>
    </div>
}
// const ThemeCustomer = ThemeContext.Consumer;