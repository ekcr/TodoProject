import React from 'react'
import '../styles/Task.css'
export default function Tasks(props) {
    const onDeleteTask = () => {
        props.delete(props.id)
    }
    
  return (
    <div className="col-md-4 mb-4">
        <div className='contentDiv'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="btn btn-danger" onClick={onDeleteTask}>Delete</button>
        </div>
    </div>
  
  )
}
