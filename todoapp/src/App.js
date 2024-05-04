import './App.css';
import Header from './components/Header';
import CreateTasks from './components/CreateTasks';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((PrevTask) =>{
        return[...PrevTask, newTask]
    });
  }
  const deleteTask = (id) =>{
    setTasks((PrevTask) =>{
        return PrevTask.filter((task, index) => index !== id);
    });
  }

  return (
    <div className="App">
      <Header/>
      <CreateTasks onAdd={addTask}/>
      <div className="container">
        <div className="row my-5">
          {tasks.map((taskItem, index) =>{
              return(
                <Tasks
                  key={index}
                  id={index}
                  title={taskItem.title}
                  content={taskItem.content}
                  delete={deleteTask}
                />
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
