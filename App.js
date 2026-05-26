import React from "react";
import ReactDOM from "react-dom/client";

// JSX -> react.createElement -> ReactElement(object) -> HTML DOM
const heading = (
    <h1 className="head">Hello World</h1>
)

// creating react components ->
// functional component 

const Title = () =>{
    <h1>Title</h1>
}

// this is known as Compnent composition 
// using one component inside another component -> 
const HeadingComponent = () =>{
    return (
        <div> 
            <Title/> 
            <h1>Hello World</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// we have to render like this 
root.render(<HeadingComponent />);
