import { useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext";

const CreateTask = () => {
  const {createTask} = useContext(TasksContext);
  const [error, setError] = useState({msg: 'ERROR', activated: false});

  const addTask = async (e) => {
    e.preventDefault();
    const taskName = e.target[0].value.trim();
    if (!taskName) {
      setError({msg: 'type a name', activated: true});
      return;
    } 
    const data = await createTask(taskName);
    if (data instanceof Error) {
      setError({msg: data.response.data.msg, activated: true});
      return;
    }
    setError({activated: false});
    e.target[0].value = '';
  }

  return (
    <section className='input-container'>
        <div className="input-wrapper">
          <h1>Task Manager</h1>
          <form onSubmit={addTask}>
            <input type="text"/>
            <button>Submit</button>
          </form>
          {error.activated && <span>{error.msg}</span>}
        </div>      
    </section>
  )
}

export default CreateTask