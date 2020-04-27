import React, { Component } from "react";

class Eventbind extends Component {
  constructor(props) {
    super(props);
    this.state = {
        main: "Hello Mate"
    }
  }

clickchange = () => {
      this.setState({
          main: "Thanks for clicking"
      })
  }


  render() {
    return (
      <div className="john">
          <h1> EVENT BINDING USING SETSTATE</h1>
          <p> {this.state.main} </p>
        <button onClick={this.clickchange}> CLICK AND BIND</button>
      </div>
    );
  }
}

export default Eventbind;
