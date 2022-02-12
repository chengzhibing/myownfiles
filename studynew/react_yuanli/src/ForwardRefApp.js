import {Component, forwardRef, createRef, useRef, useEffect} from "react";
////////
// function Son(props) {
//     const {grandRef} = props;
//     return<div>
//         <p ref={grandRef}>这个就是想要的元素</p>
//     </div>
// }
// function Father(props) {
//     const {grandRef} = props
//     return<div>
//         <Son grandRef={grandRef}></Son>
//     </div>
// }
// const NewFather = forwardRef((props, ref)=> <Father grandRef={ref} {...props}></Father>)
// class GrandFather extends Component{
//     constructor(props) {
//         super(props)
//     }
//     node = createRef(null);
//     componentDidMount() {
//         console.log(this.node)
//     }
//     render() {
//         return<div>
//           <NewFather ref={this.node}></NewFather>
//         </div>
//     }
// }
/////////
// class Form extends Component{
//     render() {
//         return<div>
//             <p>Form</p>
//         </div>
//     }
// }
// class Index extends Component{
//   constructor(props) {
//     super(props)
//   }
//   form = null;
//   button = null;
//   componentDidMount() {
//     const {forwardRef} = this.props;
//     forwardRef.current = {
//         form: this.form,
//         button: this.button,
//         index: this
//     }
//   }
//   render() {
//       return <div>
//           <button ref={(button) => this.button = button}></button>
//           <Form ref={(form) => this.form = form }></Form>
//       </div>
//   }
// }
// const ForwarRefIndex = forwardRef((props, ref) => <Index forwardRef = {ref} {...props}></Index>)
// function Home(props) {
//   const ref = useRef(null)
//   useEffect(() => {
//       console.log(ref.current)
//   }, [])
//   return <div>
//       <ForwarRefIndex ref={ref}></ForwarRefIndex>
//   </div>
// }
/////////////////////////////
// function Child() {
//     return <div>
//         <p>这个是子组件</p>
//     </div>
// }
function HomeGao(Child) {
    class Wrap extends Component {
        render() {
            const {superRef} = this.props;
            return <Child ref={superRef}/>
        }
    }
    return forwardRef((props, ref) => <Wrap superRef={ref} {...props}/>)
}

class Child extends Component{
    render() {
        return <div>
          <p>这个是子组件</p>
        </div>
    }
}
const HocIndex = HomeGao(Child);
export default () => {
    const node = useRef(null)
    useEffect(() => {
        console.log(node.current)
    }, [])
    return <HocIndex ref={node}/>
}