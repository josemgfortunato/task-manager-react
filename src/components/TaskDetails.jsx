import React from 'react';
import Button from './Button';
import './TaskDetails.css';
import { useParams } from 'react-router-dom';


const TaskDetails = () => {

    const params = useParams();


    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>Título</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid autem quos exercitationem obcaecati dolores.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;