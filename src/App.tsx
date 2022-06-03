import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";


export type FilterValueType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "What to learn", isDone: true},
        {id: 2, title: "Songs", isDone: true},
        {id: 3, title: "Books", isDone: true},
        {id: 4, title: "Rest Api", isDone: false},
        {id: 5, title: "GraphQl", isDone: false},
    ])

    let [filter, setFilter] = useState<FilterValueType>("all")

    let tasksForTodoList = tasks
    if (filter === "active") {
        tasksForTodoList = tasks.filter(task => !task.isDone)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(task => task.isDone)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <TodoList title="What to learn" tasks={tasksForTodoList} changeFilter={changeFilter} removeTask={removeTask}/>
        </div>
    );
}

export default App;
