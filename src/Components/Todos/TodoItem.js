import React from 'react'
// import axios from 'axios';

function TodoItem({todo,onDelete,markAsDone}) {
    let todoStyle = {
        
        borderRadius:'10px',
        padding:'20px',
        backgroundColor:'rgb(241,266,266)',
        fontSize:'20px',
        marginBottom:'30px'
    }
    let button = {
        backgroundColor:'transparent',
        padding:'0',
        border:'none',
        marginRight:'10px'
        
       
    }
    return (
        <div style={todoStyle} >
            <h4> {todo.title} </h4>
            <p> {todo.desc} </p>
            <button  style={button} ><i className="fas fa-check text-success " onClick={()=>markAsDone(todo)} ></i></button>
            <button style={button} ><i className="fas fa-trash-alt text-danger" onClick={()=>onDelete(todo)} ></i></button>
            
        </div>
    )
}

export default TodoItem
