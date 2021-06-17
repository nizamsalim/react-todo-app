import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Todos from './Components/Todos/Todos';
import AddTodo from './Components/AddTodo/AddTodo';
import Done from './Components/Done/Done';
import {Route} from 'react-router-dom'
import React,{useState,useEffect} from 'react';


function App() {
  
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  let initDoneTodos;
  if(localStorage.getItem('doneTodos') === null || localStorage.getItem('doneTodos').length === 0){
    initDoneTodos = [];
  }else{
    initDoneTodos = JSON.parse(localStorage.getItem('doneTodos'))
  }

  

  const onDelete = (todo)=>{

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))

  }

  const addTodo = (title,desc)=>{
    let sno;
    if(todos.length === 0){
      sno=0;
    }else{
      sno = todos[todos.length-1].sno+1;
    }

    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([myTodo,...todos])
    
    
  }
  const [doneTodos, setDoneTodos] = useState(initDoneTodos)


  const markAsDone = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    setDoneTodos([todo,...doneTodos])
  }
  useEffect(() => {
    localStorage.setItem('doneTodos',JSON.stringify(doneTodos))
    
  }, [doneTodos])
  
    
  


  const[todos,setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
    
  }, [todos])


  return (
    <div className="App">
    <Header title="ToDoS List" searchBar={false} doneTodosCount={doneTodos.length} todosCount={todos.length} />

    <Route exact path='/'>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} markAsDone={markAsDone} />
    </Route>

    <Route exact path='/done'>
      <Done doneTodos={doneTodos} />
    </Route>
    

    <Footer />
    </div>
  );
}

export default App;
