import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { task } = location.state || {};

  useEffect(() => {
    !task && navigate("/");
  },[task, navigate])

  return (
    <section className='edit-container'>
      <div className="edit-wrapper">
        <h1>Edit task</h1>
        <form>
          <div>
            <label>Task ID</label>
            <input type="text" value={task?._id} disabled/>
          </div>

          <div>
            <label>Name</label>
            <input type="text" defaultValue={task?.name}/>
          </div>

          <div>
            <label htmlFor="exampleCheckbox">Completed</label>
            <input type="checkbox" id="exampleCheckbox" defaultChecked={task?.isCompleted}/>
          </div>       
        </form>
        <div className="btn-container">
          <button>Edit</button>
          <button onClick={() => navigate("/")}>Back to tasks</button>
        </div>    
      </div>
    </section>
  )
}

export default Edit