import {myContext} from "./UseContextApp"
import {useContext} from "react"
function ChildTest1() {
    const {state, dispatch} = useContext(myContext)
    return (
        <div>
            <p>{state.name}</p>
           <button onClick={() => {dispatch({type: "changename", payload: {name: state.name==="王" ? "张": "王"}})}}>切换名称</button>
        </div>
    )
}
export default ChildTest1;