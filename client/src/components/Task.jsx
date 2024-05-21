import { useContext, useEffect, useRef } from 'react';
import { TasksContext } from '../context/TasksContext';
import { useNavigate } from 'react-router-dom';

const Task = ({taskId, taskName, isCompleted}) => {
  const task = { _id: taskId, name: taskName, isCompleted };
  const {tasks, deleteTask} = useContext(TasksContext);
  const navigate = useNavigate();
  const taskRef = useRef();
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current ? taskRef.current.scrollIntoView({ behavior: "smooth" }) : hasMounted.current = true;
    // to prevent scrolling down on component mount
  },[tasks]);

  return (
    <div ref={taskRef} className='task'>
      <span className={`${isCompleted ? 'completed' : ''}`}>{taskName}</span>
      <div className='btn-container'>
        <button onClick={() => deleteTask(taskId)}>Delete</button>
        <button onClick={() => navigate('/edit', { state: {task} })}>Edit</button>
      </div>       
    </div>
  )
}

export default Task