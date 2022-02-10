import { Component, createRef } from "react";

class RefApp extends Component{
    constructor(props) {
        super(props)
    }
    currentDiv = createRef(null);
    currentChidInstence = createRef(null);
    componentDidMount() {
     console.log(this.currentDiv)
     console.log(this.currentChidInstence)
    }
    render() {
        return <div>
            <div ref={this.currentDiv}></div>
            <ChildRef ref={this.currentChidInstence}></ChildRef>
        </div>
    }
}
//注意ChildRef不能是函数组件，因为函数组件没有实例，不能被ref标记
class ChildRef extends Component{
    render() {
        return <>
        <p>hello</p>
        </>
    }
}
export default RefApp;