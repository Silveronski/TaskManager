import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import Task from './Task';

const Tasks = () => {
  const {tasks} = useContext(TasksContext);

  return (
    <section className='tasks-container'>
      <div className='tasks-wrapper'>
        <h2>Tasks:</h2>
        <div className="tasks-content">
          {tasks && tasks.map((task) => (
            <Task key={task._id} taskId={task._id} taskName={task.name} isCompleted={task.isCompleted}/>
          ))}
        </div>
      </div>    
    </section>  
  )
}

export default Tasks