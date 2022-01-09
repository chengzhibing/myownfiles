import {useState} from "react";
function CounterState({initCounter}) {
    const [counter, setCounter] = useState(initCounter)
    return(
        <>
         <p>count: {counter}</p>
         <div onClick={() => setCounter(initCounter)}>重置</div>
         <div><button onClick={() => setCounter((preCounter) => preCounter + 1)}>+</button></div>
         <div><button onClick={() => setCounter((preCounter) => preCounter - 1)}>-</button></div>
        </>
    )
}
export default CounterState;