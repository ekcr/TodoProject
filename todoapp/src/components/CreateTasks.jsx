import { useState } from 'react'
function CreateTasks(props) {

    const [task, setTask] = useState({
        title: "",
        content: "",
    });
    
    const onChangeTask = (event) =>{
        const{name, value} = event.target;

        setTask((PrevTask) =>{
            return{
                ...PrevTask,
                [name]: value,
            };
        });
    }

    const submitTask = (event) =>{
        props.onAdd(task);
        setTask({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    return (
    <div className="div_task">
        <form className="form_task">
            <input 
                type="text" 
                placeholder="Create a new task"
                className="form-control todotext mb-3"
                name="title"
                value={task.title}
                onChange={onChangeTask}
            />

            <textarea
                type="text"
                placeholder="Enter task description"
                className="form-control todotext mb-3"
                rows={4}      
                name="content"
                value={task.content}
                onChange={onChangeTask}
  
            />

            <button className="btn btn-primary mb-3" onClick={submitTask}>Create</button>
        </form>
    </div> );
}

export default CreateTasks;