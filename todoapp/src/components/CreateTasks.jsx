function CreateTasks() {
    return (
    <div className="div_task">
        <form className="form_task">
            <input 
                type="text" 
                placeholder="Create a new task"
                className="form-control todotext mb-3"
                name="title"
            />

            <textarea
                type="text"
                placeholder="Enter task description"
                className="form-control todotext mb-3"
                rows={4}      
                name="content"      
            />

            <button className="btn btn-primary mb-3">Create</button>
        </form>
    </div> );
}

export default CreateTasks;