// import React from "react"
// export default function lazy(loadComponent) {
//     return class WrapComponent extends React.Component {
//       state = {
//         Component: () => <h1>loading...</h1>
//       }
//       async componentDidMount() {
//         const { default: Component } = await loadComponent();
//         this.setState({ Component });
//       }
//       render() {
//         const Component = this.state.Component;
//         return <Component />;
//       }
//     }
//   }
import React from "react"
export default function lazy(fn) {
    return class extends React.Component{
        state = {
            Component: () => <div>loading...</div>
        }
        async componentDidMount() {
         // const Component = await fn()
          const {default: Component} = await fn()
          this.setState(
              {
                  Component: Component
              }
          )
        }
        render() {
            const Component = this.state.Component
            return <Component/>
        }
    }
} 

  