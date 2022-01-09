import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
function HookApp() {
    const [show, setShow] = useState(1)
    return(
        <div>
          {show ? <Child1/> : null}
          <hr/>
          {show ? <Child2/> : null}
          <hr/>
          <button onClick={() => {setShow(!show)}}>切换挂载</button>
        </div>
    )
}
export default HookApp;