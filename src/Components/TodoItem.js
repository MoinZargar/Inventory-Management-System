import React from 'react'

export default function TodoItem({todo, deleteTodo}) {
  return (
   <div className='mt-2'>
    <h6>{todo.title}</h6>
    <p>{todo.desc}</p>
    <button className='btn btn-danger btn-sm' onClick={()=>deleteTodo(todo)}>Delete</button>

   </div>

  )
}
