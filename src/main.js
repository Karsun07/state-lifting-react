import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./components/increment";
import Decrement from "./components/decrement";

function App(){
    const [count,setCount]=useState(0);
    return (
        <>
        <h1>Count:{count}</h1>
        {/* this is state lifting => making the state variable in main file and then transferring it to children */}
        <Increment counts={count} setCounts={setCount}/>
        <Decrement counts={count} setCounts={setCount}/>
        </>
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);