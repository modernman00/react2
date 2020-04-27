import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      add: ""
    };
  }

  counter() {
    this.setState({
      count: this.state.count + 1,
      add: (this.state.count * 0.1)+this.state.count
    });
  }


  counter2() {
    this.setState({
      count: this.state.count - 1,
      add: this.state.count + 6
    });
  }

  render() {
    return (
      <div>
        <p> {this.state.count}</p>

        <p>{this.state.add}</p>
        <button onClick={() => this.counter()}>Counter+</button>
        <button onClick={() => this.counter2()}>Counter-</button>
      </div>
    );
  }
}

export default Counter
