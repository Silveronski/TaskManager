import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
import { TasksContext } from '../context/TasksContext';

const Tasks = () => {
  const {tasks} = useContext(TasksContext);

  return (
    <section className='tasks-container'>
      <div className='tasks-wrapper'>
        <h2>Tasks:</h2>
        <div className="tasks-content">
          {tasks && tasks.map((task) => (
            <Task key={task._id} taskName={task.name}/>
          ))}
        </div>
      </div>    
    </section>  
  )
}

export default Tasks