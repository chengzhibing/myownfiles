import React, {useReducer} from "react"
const myContext = React.createContext()
const initState = {
    count: 1,
    name: "张"
}
function reducer(state, action) {
    switch(action.type) {
        case "changename": {
            return {
                ...state,
                name: action.payload.name
            }
        }
        case "increment": {
            return{
                ...state,
                count: state.count + 1
            }
        }
        case "decrement": {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case "reset": {
            return {
                ...state,
                count: initState.count
            }
        }
        default: {
            return state
        }
    }
}
function CreateProvide(props) {
    console.log(props, "props,father")
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state, "father")
    return(
        <myContext.Provider value={{state, dispatch}}>
            {props.children}
        </myContext.Provider>
    )
}
export {CreateProvide, reducer, myContext}