import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank")
        }
        else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }

    }
  return (
    
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label" id="title">
      Todo Title
    </label>
    <input
      type="text"
      className="form-control"
      value={title}
      onChange={(e) => {setTitle(e.target.value)}}
      id="title"
    />
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">
      Todo description
    </label>
    <input
      type="text"
      className="form-control"
      value={desc}
      onChange={(e) => {setDesc(e.target.value)}}
      id="desc"
    />
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">
    Add To do
  </button>
  </div>
</form>

    </div>
  )
}

export default AddTodo