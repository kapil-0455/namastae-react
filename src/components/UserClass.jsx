import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        
    }
    render(){

        const {name , branch } = this.props;
        <div>
            <h2>Name : {name}</h2>
            <h3>Branch : {branch} </h3>
            <h4>Job Role : Software Developer</h4>
        </div>

    }
}

export default UserClass