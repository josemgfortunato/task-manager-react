//React Imports

import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

//CSS Imports

import "./App.css";

//Components Imports

import Tasks from './components/Tasks';
// import Task from './components/Task';
import AddTask from './components/AddTask';
// import Button from './components/Button';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

//State

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

//Functions

const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
        if (task.id === taskId) return {
            ...task, completed: !task.completed
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
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
}

//Render App

    return (
            <BrowserRouter>
                <div className="container"> 
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Header/>                 
                                <AddTask handleTaskAddition={handleTaskAddition} />
                                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />            
                            </>
                        }>
                        </Route>
                        <Route path='/:taskTitle' element={
                            <TaskDetails/>
                        }/>
                    </Routes>
                </div>
            </BrowserRouter>
    )
       
}

export default App; 