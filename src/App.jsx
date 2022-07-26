import React, { useState } from 'react';
import "./App.css";
import Tasks from './components/Tasks';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Button from './components/Button';
import {v4 as uuidv4} from 'uuid';

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

const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,

    } ]

    setTasks(newTasks)
}

    return (

        <>
             <div className="container">
                <AddTask handleTaskAddition={handleTaskAddition}/>
                <Tasks tasks={tasks}/>
             </div>
        </>
    )
       
}

export default App; 