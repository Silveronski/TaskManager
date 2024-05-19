import React, { useEffect, useState } from 'react'
import Task from './Task';
import { fetchTasks } from '../api/index';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data.tasks);
      console.log(data.tasks);
    }

    getTasks();

  },[]);

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