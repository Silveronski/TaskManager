import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import { useNavigate } from 'react-router-dom';

const Task = ({taskId, taskName, isCompleted}) => {
  const task = {
    _id: taskId,
    name: taskName,
    isCompleted
  };
  const {deleteTask} = useContext(TasksContext);
  const navigate = useNavigate();
  return (
    <div className='task'>
      <span className={`${isCompleted ? 'completed' : ''}`}>{taskName}</span>
      <div className='btn-container'>
        <button onClick={() => deleteTask(taskId)}>Delete</button>
        <button onClick={() => navigate('/edit', { state: {task} })}>Edit</button>
      </div>       
    </div>
  )
}

export default Task