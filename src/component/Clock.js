import React, { Component } from 'react'

class Clock extends Component {
constructor(props){
    super(props)
    this.state ={
        date: new Date()
    };
}

// callback function to call the timer function every second
    componentDidMount() {
       this.timerId =  setInterval(() => this.secondUpdate(), 1000);
    }  
    
    componentWillUnmount() { 
        clearInterval(this.timerId);
    }


// timer is called again
    secondUpdate() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="john">
                <h2> USING MOUNT AND WILLUNMOUNT</h2>

                <p>The time is {this.state.date.toLocaleTimeString()}</p>
                
            </div>
        )
    }
}

export default Clock


