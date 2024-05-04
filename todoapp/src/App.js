import './App.css';
import Header from './components/Header';
import CreateTasks from './components/CreateTasks';

function App() {
  const addTask = (task) => {
    console.log(task.title);
    console.log(task.content);
  }
  return (
    <div className="App">
      <Header/>
      <CreateTasks onAdd={addTask}/>
    </div>
  );
}

export default App;
