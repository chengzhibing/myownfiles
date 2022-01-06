import { Component } from "react";
import {connect} from "react-redux"
import * as userAction from "./pages/redux-react/actions/user"
console.log(userAction)
class ReduxSecondApp extends Component{
   constructor(props) {
       super(props) 
       this.state = {
         
       }
   }
    render() {
        const {user} = this.props;
        return (
            <div>
                heldhaidhiadhi
                <button onClick={() => this.props.dispatch(userAction.login())}>登录</button>
                <button onClick={()=> this.props.dispatch(userAction.logout({isLogin: false, nickName: "退出去了"}))}>退出</button>
                {user.loading && <p>正在登录...</p>}
                {user.isLogin && <p>您已经登录上了</p>}
                {!user.isLogin && <p>您还没有登录</p>}
            </div>
        )
    }
}
function mapStateToProps(state) { //通过这个函数来将组件的props关联到store中state
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(ReduxSecondApp)