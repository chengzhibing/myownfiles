import React, {Component} from "react"
export default class SetState extends Component{
  state = {
      counter: 1
  }
  componentDidMount() {
      const _this = this;
      this.setState((preSta) => {
        return {
            counter: preSta.counter+1
        }
      })
      this.setState((preSta) => {
        return {
            counter: preSta.counter+1
        }
      })
      this.setState((preSta) => {
        return {
            counter: preSta.counter+1
        }
      })
      this.setState({state: this.state.counter + 1}, (counter) => {
          console.log(_this.state.counter)
      })
  }
  render() {
  return <div>{this.state.counter}</div>
  }
}