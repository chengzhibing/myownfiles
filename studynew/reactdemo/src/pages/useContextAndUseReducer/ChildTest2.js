import React, {useContext, useEffect} from "react";
import {myContext} from "./UseContextApp";
function ChildTest2(props) {
    console.log(props, "child2,props")
  const {state, dispatch} = useContext(myContext)
  useEffect(() => {
      console.log(state, "effect")
  })
  return (
      <>
        <p>这是第二个child用于改变数值</p>
        <hr/>
  <button onClick={() => {dispatch({type: "increment"})}}>增加数值{state.count}</button>
  <hr/>
  <button onClick={() => {dispatch({type: "decrement"})}}>减少数值{state.count}</button>
  <hr/>
  <button onClick = {() => {dispatch({type: "reset"})}}>重置数值{state.count}</button>
      </>
  )
}
export default ChildTest2;