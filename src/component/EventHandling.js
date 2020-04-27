import React from 'react'

function EventHandling() {

   function click () {
        console.log('it is clicked');
    }

    return (
        <div className="john">

            <h2> Event Handling</h2>

            <button onClick={click}>click</button>
            
        </div>
    )
}
// event handler is a function and not a function call so do not include the parenthesis. in the class function. just add this.click

export default EventHandling
