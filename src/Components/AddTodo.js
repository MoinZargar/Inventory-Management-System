import React, { useState } from 'react'

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    addTodo(title,desc)
    setTitle('')
    setDesc('')
  }
  return (
    <div className='container my-3'>
      <h5>Add Inventory</h5>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="todo-title" class="form-label">Title</label>
          <input type="text" class="form-control" id="todo-title" value={title} onChange={(e) => (setTitle(e.target.value))} />

        </div>
        <div class="mb-3">
          <label for="todo-desc" class="form-label">Quantity</label>
          <input type="text" class="form-control" id="todo-desc" value={desc} onChange={(e) => (setDesc(e.target.value))} />
        </div>
        <div className='my-4'>
          <button type="submit" class="btn btn-success btn-sm" >Submit</button>
        </div>

      </form>
    </div>
  )
}
