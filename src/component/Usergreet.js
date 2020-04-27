import React, { Component } from 'react'

export class Usergreet extends Component {

    constructor(){
        super()
        this.state = {
            loggedin: true
        }
    }
    render() {
        const msg = <div className="john">
            <p>CONDITIONAL RENDERING</p>
            <h5>Hello Modernman is rendered because the condition is met</h5>
            </div>
        const msg2 = (
          <div className="john">
            <p>CONDITIONAL RENDERING</p>
            <h5> Hello Jibs Oguns is rendered because the condition is met</h5>
          </div>
        );
        return this.state.loggedin ? msg : msg2
    }
}

export default Usergreet
