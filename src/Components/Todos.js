import React from 'react'
import TodoItem from '../Components/TodoItem'
export default function Todos({todos,deleteTodo}) {
  return (
    <div className='container'>
    <h5>Inventories</h5>
    {
      todos.length==0 ? "No Todos to display":
      todos.map((todo)=>
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      )  
    }
    </div>
    
  )
}
