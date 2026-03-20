import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./components/increment";

function App(){
    const [count,setCount]=useState(0);
    return (
        <>
        <div>
        <h1>Parent count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>

        <Increment counts={count}/>



        </>
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);