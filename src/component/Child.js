import React from 'react'

function Child({greet}) {
    return (
        <div>
            <button onClick={()=>greet('child')}> Greet Parents</button>     
        </div>
    )
}

export default Child
