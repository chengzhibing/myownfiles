
import React, {useMemo, useState} from "react";
let ch;
function Child1({a}) {
    return (
        <div>
          {console.log("Child1重新渲染")}
          {a}
        </div>
    )
}
function UseMemoApp() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const child1 = useMemo(()=> (<div>
        {console.log("useMemo,这是一个复杂的计算child1")}
        <Child1 a= {b}/>
    </div>), [a]) //依赖于a的变化当a发生变化的时候才会重新渲染
    console.log("ch和child1相等", ch === child1)
    ch = child1;
    
    const child2 = (<div>
        {console.log("没有使用useMemo，child2")}
        <Child1 a ={b}/>
    </div>) //只要组件中的值改变就会重新渲染，也就是改变a,b的值都会重新渲染
    return (
        <div>
            {child1}
            {child2}
            <p><button onClick={() => (setA(a + 1))}>改变a</button></p>
            <p><button onClick={() => (setB(b + 1))}>改变b</button></p>
        </div>
    )
}
export default UseMemoApp;