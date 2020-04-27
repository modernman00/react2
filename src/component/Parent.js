import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent"
    };

    this.nameParent = this.nameParent.bind(this);
  }

  nameParent(childname) {
    alert(`Hello ${this.state.parentName} from ${childname}`);
  }

  render() {
    return (
      <div className="john">
        <p> Pass Methods as Props</p>
        <Child greet={this.nameParent} />
      </div>
    );
  }
}

export default Parent;
