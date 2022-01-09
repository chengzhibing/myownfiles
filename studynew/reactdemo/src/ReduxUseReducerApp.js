import {useReducer, useEffect} from "react"
import {connect} from "react-redux";
import reducer from "./pages/redux-react/reducer/index"
import * as userAction from "./pages/redux-react/actions/user"
function ReduxUseReducerApp (props) {
const initState= props.user
//     console.log(initState)
//    const [state, dispatch] = useReducer(reducer, initState);
//    useEffect(() => {
//        console.log(state)
//    })
   //onClick={() => {dispatch({type: "LOGIN", payload: {nickName: "解放全人类"}})}}
   return(
       <>
         {initState.nickName}
         <div><button onClick={() => {props.dispatch(userAction.login())}}>点击修改名称</button></div>
       </>
   )
}
function mapStateToProps(state) { //通过这个函数来将组件的props关联到store中state
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(ReduxUseReducerApp)