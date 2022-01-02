import React, {Component} from "react";
import {Link} from "react-router-dom"
import {Button} from "antd"
class ButtonRouter extends Component{
  render() {
      return (
        <Link to="/list/123">
        <Button size="large" type="primary">按钮</Button>
        </Link>
      )
  }

}
export default ButtonRouter;