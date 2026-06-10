import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";

const AppLayout = ()=>{
    return (
        <div>
           <Heading/>
           <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// we have to render like this 
root.render(<AppLayout />);
