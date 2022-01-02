import React, {Component} from "react";

class Bicycle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.changeNumber = this.changeNumber.bind(this)
    }
    changeNumber() {
       this.setState((preState) => {
         return {
           counter: preState.counter  += 1
         }
       })
    }
    componentWillMount() {
      console.log("子组件挂载到DOM之前，componentWillMount")
      
    }
    componentDidMount() {
        console.log("子组件挂载到dom之后，componentDidMount")
    }
    shouldComponentUpdate() {
      console.log("子组件组件是否需要更新,shouldComponentUpdate")
      return true;
    }
    componentWillUpdate() {
      console.log("子组件将要更新componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("子组件更新之后，componentDidUpdate")
    }
    componentWillReceiveProps(nextPorps) {
      console.log("componentWillReceiveProps，子组件--------------")
    }
    render() {
      console.log("子组件的render")
      return <div >
          <div><button onClick={this.changeNumber}>子组件点击</button></div>
          <div>子组件本身的数据：{this.state.counter}</div>
          <div>来自父组件的数据：{this.props.number}</div>
        </div>
    }
}
export  default Bicycle;