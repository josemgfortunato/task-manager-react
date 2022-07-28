import React, { useState } from 'react';
import "./App.css";
import Tasks from './components/Tasks';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Button from './components/Button';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {

    const [tasks, setTasks] = useState([{
        id: '1',
        title: 'Estudar programação',
        completed: false,
    },
    {
        id: '2',
        title: 'Ler Livros',
        completed: true,
    },
    {
        id: '3',
        title: 'Limpar a casa',
        completed: false,
    }
       
    ]);

const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
        if (task.id == taskId) return {
            ... task, completed: !task.completed
        }
        return task
    })
    setTasks(newTasks)
}

const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,

    } ]

    setTasks(newTasks)
}

const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
}

    return (

        <Router>
             <div className="container">
                <Header/>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
             </div>
        </Router>
    )
       
}

export default App; 