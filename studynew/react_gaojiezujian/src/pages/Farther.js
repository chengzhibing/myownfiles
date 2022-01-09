import React, {Component} from "react"
export default function Farther(OtherComponent) {
  return class extends Component{
      constructor() {
          super()
          this.state = {
              query: {
                name: "",
                id: "",
                time: "",
                valid: ""
              },
              dataSource: []
          }
      }
      onChange = (params) => {
        this.setState((state) => ({query: {...state.query, name: "张", ...params}}))
      }
      componentDidMount() {
        this.onChange({age: 10})
      }
      render() {
          return (
              <OtherComponent {...this.props} {...this.state} onChange={this.onChange}/>
          )
      }
  }
}