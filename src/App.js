import React, { useState } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer'
import AddTodo from './Components/AddTodo';
function App() {
  const [todos,setTodos]=useState([])
  const deleteTodo=(todo)=>{
    const newTodo=todos.filter((currentTodo)=>(
          currentTodo!==todo
    ))
    setTodos(newTodo)
  }
  const addTodo=(title,desc)=>{
    const newTodo={
      id:todos.length+1,
      title:title,
      desc:desc,
    }
    setTodos(prev => [...prev,newTodo])

  }
  return (
   <>
   <Header title="Inventory Management System"/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos}  deleteTodo={deleteTodo}/>
   <Footer/>
   </>
  );
}

export default App;
