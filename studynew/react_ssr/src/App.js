import React from 'react';
import {createRouter} from "@/router/routerRevert"
class App extends React.PureComponent{

 render(){
    return createRouter("client")()
 }
};
export default App;