import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const Task = ({taskId, taskName, isCompleted}) => {
  const {deleteTask} = useContext(TasksContext);
  return (
    <div className='task'>
      <span className={`${isCompleted ? 'completed' : ''}`}>{taskName}</span>
      <div className='btn-container'>
        <button onClick={() => deleteTask(taskId)}>Delete</button>
        <button>Edit</button>
      </div>       
    </div>
  )
}

export default Task