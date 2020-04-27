import React, { Component } from 'react'

class Greetings extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      id: props.id,
      age: props.age
    };
  }

  changeOutput() {
    this.setState({
      name: "JUMOKE OLAOGUN",
      age: 45,
      id: "PO4567"
    });
  }

  changeOutput2() {
    this.setState({
      name: "OLADELE OLAOGUN",
      age: 225,
      id: "PO456790"
    });
  }

  render() {
    return (
      <div className="john">
        <h1> Hello, {this.state.name}</h1>
        <h1> Your ID is, {this.state.id}</h1>
        <h1> and you are , {this.state.age} years old</h1>

        <button onClick={() => this.changeOutput()}>CUST ONE</button>
        <button onClick={() => this.changeOutput2()}>CUST TWO</button>
      </div>
    );
  }
}

export default Greetings;