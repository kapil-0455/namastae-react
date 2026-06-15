import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

const AppLayout = ()=>{
    return (
        <div>
           <Heading/>
           <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <About />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

// we have to render like this 
root.render(<RouterProvider router={appRouter}/>);
