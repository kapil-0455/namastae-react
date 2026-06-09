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

const Heading = ()=>{
    return (
        <div className="header-container">
            <div className="img-container">
                <img src="https://imgs.search.brave.com/XJN2MMwNlyrZaTXl5RvYif5XdRAxl1XMoP_wcpKg5c4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/MDU4LzcxOC9zbWFs/bC9vbmxpbmUtZm9v/ZC1vcmRlci1sb2dv/LWljb24tdmVjdG9y/LmpwZw" alt="logo" className="img-logo"/>
            </div>
            <div className="title-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// taking hard coded data 
const ResCard = (props) =>{

    const {name , cuisine} = props;
    return (
        <div className="card">
            <img src="https://imgs.search.brave.com/53ISeiEgVkl5s-rjVUS7YQxkL8MnJx8BrLC-oKhS3-w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vYm93bC1mb29k/LXdpdGgtbGVtb25z/LXBhcnNsZXktYm90/dG9tXzExNDIyODMt/MzY2ODU4LmpwZz9z/ZW10PWFpc190ZXN0/X2Imdz03NDAmcT04/MA" alt="food" className="res-logo"/>
            <h2>name</h2>
            <h3>cuisine</h3>
            <h4>Rating</h4>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <ResCard name= "Burger King" cuisine = "Fast Food"/>
                <ResCard name = "Dominos" cuisine = "Fast Food"/>
                <ResCard name = "KFC" cuisine = "Fast Food"/>
                <ResCard name = "Pizza Hut" cuisine = "Fast Food"/>
            </div>
            
        </div>
    )
}

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
