import React, {Component} from "react";
import axios from "axios";
class AxiosTest extends Component {
  componentDidMount() {
    const promise = axios.get("http://www.dell-lee.com/react/api/demo.json")
    promise.then((data) => {
      console.log(data)
    })
  }
  render() {
      return<></>
  }
}
export default AxiosTest;