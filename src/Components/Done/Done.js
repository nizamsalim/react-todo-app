import React from 'react'
import './Done.css';
import DoneItem from './DoneItem';

function Done(props) {
    let noTodos = {
        textAlign:'center',
        marginTop:'30px',
        color:'red'
    }
    return (
        
        <div>
            <div className="container" style={{minHeight:'40vh'}} >
                <h3 className='done-heading' >Done Todos</h3>
                {
                    props.doneTodos === null || props.doneTodos.length === 0 ? <h3 style={noTodos} > No done Todos </h3> :
                    props.doneTodos.map((doneTodo)=>{
                        return <DoneItem key={Math.random()} doneTodo={doneTodo} />
                    })
                }
            </div>
            
        
        </div>
    )
}


export default Done
