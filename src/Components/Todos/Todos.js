import React from 'react';
import TodoItem from './TodoItem';

function Todos(props) {
    let noTodos = {
        textAlign:'center',
        marginTop:'30px'
    }
    
    return (
        <div className="container" style={{minHeight:'40vh'}} >
            <h3 style={{textDecoration:'underline',fontWeight:'700',textAlign:'center',marginBottom:'30px   '}} >Todos List</h3>
           
            {
                props.todos.length === 0 ? <h3 style={noTodos}>No todos to display</h3>:
                props.todos.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} markAsDone={props.markAsDone}/>
                })
            }
            
            
            
            
        </div>
    )
}

export default Todos
