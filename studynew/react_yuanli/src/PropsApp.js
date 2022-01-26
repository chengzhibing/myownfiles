import {useState, useEffect} from "react";
function ChildComponent() {
    return <div>This is ChildComponent</div>
}
function PropsComponent(props) {
    console.log(props)
    const {children,mes,renderName, say, Component} = props;
    const renderFunction = children[0];
    console.log(children[0]())
    const renderComponent = children[1];
   useEffect(() => {
       console.log(this, "_this of PropsComponet")
   })
   //对于子组件，不同的props怎么被处理
   return <div>
       {renderFunction()}
       {mes}
       {renderName()}
       {renderComponent}
       <Component/>
       <button onClick={() => say()}>change content</button>
   </div>
}
//props定义绑定
export default function Index() {
    const [mes, setMes] = useState(() => "Hello React")
    const node = null;
    const say = () => setMes(() => "let us learn React")
    return <div>
        <PropsComponent mes = {mes} say={say} Component = {ChildComponent} renderName= {() => "My name is Alien"}>
        {() => <div>Hello World</div>}
        <ChildComponent /> 
        </PropsComponent>
    </div>
}