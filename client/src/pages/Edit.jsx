import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TasksContext } from '../context/TasksContext';
import TaskFormFields from '../components/TaskFormFields';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { task } = location.state || {};
  const { updateTask } = useContext(TasksContext);
  const [error, setError] = useState({msg: 'Error', activated: false});

  useEffect(() => {
    !task && navigate("/");
  },[task, navigate])

  const editTask = async (e) => {
    e.preventDefault();
    const name = e.target[1].value.trim();
    const isCompleted = e.target[2].checked;
    if (!name) {
      setError({msg: 'type a name', activated: true});
      return;
    }
    const data = await updateTask(task._id, { name, isCompleted });
    if (data instanceof Error) {
      setError({msg: data.response.data.msg, activated: true});
      return;
    }
    navigate("/");
  }

  return (
    <section className='edit-container'>
      <div className="edit-wrapper">
        <h1>Edit task</h1>
        <form onSubmit={editTask}>
          <TaskFormFields text='Task ID' inputType='text' inputValue={task?._id} disabled={true}/>   
          <TaskFormFields text='Name' inputType='text' inputValue={task?.name} error={error.activated ? error.msg : null}/> 
          <TaskFormFields text='Completed' inputType='checkbox' inputValue={task?.isCompleted}/>   
          <div className="btn-container">
            <button>Edit</button>
            <button type='button' onClick={() => navigate("/")}>Back to tasks</button>
          </div>    
        </form>
      </div>
    </section>
  )
}

export default Edit