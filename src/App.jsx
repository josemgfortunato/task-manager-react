import React, { useState } from 'react';
import "./App.css";
import Tasks from './components/Tasks';
import Task from './components/Task';

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
    }
       
    ]);

    return (

        <>
             <div className="container">
                <Tasks tasks={tasks}/>
             </div>
        </>
    )
       
}

export default App;