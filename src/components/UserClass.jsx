import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, branch } = this.props;
    const { count, count2 } = this.state;

    <div>
      <h2>Name : {name}</h2>
      <h3>Branch : {branch} </h3>
      <button
        onClick={() => {
          this.setState({
            count: this.state.count +1,
          });
        }}
      ></button>
      <h4>Job Role : Software Developer</h4>
      <h2>Count : {count} </h2>
      <h2>Count2 : {count2} </h2>
    </div>;
  }
}

export default UserClass;
