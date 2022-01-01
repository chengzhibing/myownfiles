import React, {Component} from "react";

class Bicycle extends Component{
    constructor(props) {
        super();
        console.log(props)
        this.state = {
            counter: props.counter,
            arr: []
        }
        this.changeNumber = this.changeNumber.bind(this)
    }
    changeNumber() {
      this.setState((preState) => {
        preState.counter += 1;
        console.log(this.state.counter)
      })
      this.setState((preState) => {
        preState.arr.push(this.state.counter)
      })
    }
    // static getDerivedStateFromProps(nextPorps, preState) {
    //    return null;
    // }
    // getSnapshotBeforeUpdate(preProps, preState) {
    //     console.log(preProps, "更新状态之前")
    //     console.log(preState, "更新状态之前")
    //     console.log("更新状态之前，getSnapshotBeforeUpdate")
    // }
    // componentWillMount() {
    //     console.log("挂载到dom之前，componentWillMount")
    // }
    componentDidMount() {
        console.log("挂载到dom之后，componentDidMount")
    }
    componentDidUpdate() {
        console.log("更新之后，componentDidUpdate")
    }
    // componentWillUpdate() {
    //     console.log("更新之前，componentWillMount")
    // }
    componentWillReceiveProps(nextPorps) {
      console.log("componentWillReceiveProps", nextPorps)
    }
    render() {
        const _this = this;
      return <div >
          <div><button onClick={_this.changeNumber}>子组件点击</button></div>
          {_this.state.arr.map(() => {
            return <div>{_this.state.counter}</div>
          })}
        </div>
    }
}
export  default Bicycle;