import React from 'react';
import './Done.css'

function DoneItem({doneTodo}) {
    
    return (
        <div className='done-item' >
           <h4> {doneTodo.title} </h4> 
           <p> {doneTodo.desc} </p>
        </div>
    )
}

export default DoneItem
