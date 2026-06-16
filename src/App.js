import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";


const AppLayout = ()=>{
    return (
        <div>
           <Heading/>
           <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children :[
            {
                path :'/',
                element : <Body/>
            }
            ,
            {
                path: "/about",
                element: <About />
            },
            {
                path :"restaurants/:resId",
                element : <RestaurantsMenu/>
            }
        ],
        errorElement : <Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

// we have to render like this 
root.render(<RouterProvider router={appRouter}/>);
