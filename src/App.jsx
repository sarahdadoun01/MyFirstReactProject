import { useState } from 'react'
import Task from "./Task"
import './App.css'

function App() {

    const [tasks, setTasks] = useState([]);     // store tasks as a STATE array (useState())
    const [newTask, setNewTask] = useState(""); // store input value

    // function to add a task
    const addTask = () => {
        if (newTask.trim() === "") return;      // prevent empty tasks
        setTasks([...tasks, newTask]);          // add new task to the list
        setNewTask("");                         // clear inpute after adding to the list
    }



    return (
        <div>
            <h1>Task Manager</h1>

            {/* Input for adding tasks */}
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>

            {/* Render each task */}
            {tasks.map((task, index) => (
                <Task key={index} taskName={task}/>
            ))}

        </div>
        
    )
}

export default App
