import { useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext";

const Input = () => {
  const {createTask} = useContext(TasksContext);
  const [error, setError] = useState(false);

  const addTask = async (e) => {
    e.preventDefault();
    const taskName = e.target[0].value;
    if (!taskName || taskName.trim() === '') {
      setError(true);
      return;
    } 
    else {
      const data = await createTask(taskName);
      if (!data) {
        setError(true);
        return;
      }
      setError(false);
      e.target[0].value = '';
    }
  }

  return (
    <section className='input-container'>
        <div className="input-wrapper">
          <h1>Task Manager</h1>
          <form onSubmit={addTask}>
            <input type="text"/>
            <button>Submit</button>
          </form>
          {error && <span>ERROR</span>}
        </div>      
    </section>
  )
}

export default Input