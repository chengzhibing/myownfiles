import {LOGIN, LOGOUT, UPDATEUSERINFO} from "../contains/user.js"
import * as loginActions from "../actions/user.js";

export default function(state = {}, actions) {
    console.log(actions.payload)
   switch(actions.type) {
       case LOGIN: {
          return {
              ...state,
              ...actions.payload
          }
       }
       case LOGOUT: {
            return {
                ...state,
                ...actions.payload
            }
        }
        case UPDATEUSERINFO: {
            return {
                ...state,
                ...actions.payload
            }
        }
        default: { //注意这里是返回原值，而不是{state}
           return state
        }
   }
}