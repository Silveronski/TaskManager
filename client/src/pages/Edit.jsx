import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TasksContext } from '../context/TasksContext';

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
    const name = e.target[1].value;
    const isCompleted = e.target[2].checked;
    if (!name || name.trim() === '') {
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
          <div>
            <label>Task ID</label>
            <input type="text" value={task?._id} disabled/>
          </div>

          <div>
            <label>Name</label>
            <input type="text" defaultValue={task?.name}/>
            {error.activated && <div className='error'>{error.msg}</div>}
          </div>

          <div>
            <label htmlFor="exampleCheckbox">Completed</label>
            <input type="checkbox" id="exampleCheckbox" defaultChecked={task?.isCompleted}/>
          </div>  

          <div className="btn-container">
            <button type='submit'>Edit</button>
            <button onClick={() => navigate("/")}>Back to tasks</button>
          </div>    
        </form>
      </div>
    </section>
  )
}

export default Edit