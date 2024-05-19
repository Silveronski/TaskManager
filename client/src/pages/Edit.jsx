import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const testTask = {
  id: 123
};

const Edit = () => {
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  return (
    <section className='edit-container'>
      <div className="edit-wrapper">
        <h1>Edit task</h1>
        <form>
          <div>
            <label>Task ID</label>
            <input type="text" value={testTask.id} disabled/>
          </div>

          <div>
            <label>Name</label>
            <input type="text"/>
          </div>

          <div>
            <label htmlFor="exampleCheckbox">Completed</label>
            <input type="checkbox" id="exampleCheckbox"/>
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