import React from "react";
import ReactDOM from "react-dom/client";

// JSX -> react.createElement -> ReactElement(object) -> HTML DOM
const heading = (
    <h1 className="head">Hello World</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
