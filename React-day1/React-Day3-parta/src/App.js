import "./App.css";
import {useState} from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
        setNewTask(event.target.value);
  };

  const addTask = () => {
    const task  = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      completed : false,
    };
   setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) =>{
      if(task.id !== id)
      {
        return false;
      }
      else{
        return true;
      }
    })
    setTodoList(newTodoList);
  };


  const completeTask = (id) => {
          setTodoList(
            todoList.map((task) => {
              if(task.id === id)
              {
                return {...task, completed: true};
              }
              else{
                return task;
              }
            })
          )
  }


  return (
    <div className="App">
      <br />
      <h1 style={{fontFamily: "fantasy"}}>Hello & Welcome to My personal todoList App</h1>
      <p style={{fontFamily:"monospace", fontSize: "15px"}}>Here you can addTask, deleteTask and completeTask</p>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <Task 
          taskName={task.taskName}
           id={task.id}  
           completed = {task.completed}
          deleteTask={deleteTask}
          completeTask={completeTask} />
        })}
      </div>
      
    </div>
  );
}


export default App;

