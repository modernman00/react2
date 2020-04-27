import React from 'react'
import data from './data/FakedJson'

function NamedList() {

     

    return (
        <div>
    
    {   data.map( (data) => {
        <h2>{data.id}</h2>
        <h2>{data.userId}</h2>
    })
    }
        </div>
    )
}

export default NamedList
