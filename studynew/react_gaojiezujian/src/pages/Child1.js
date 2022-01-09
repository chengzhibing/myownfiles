import Farther from "./Farther";
import React, {Component} from "react";
function Child1(props) {
    return(
      <>
        {props.query.age}
        {props.query.name}
      </>
    )
}
export default Farther(Child1)