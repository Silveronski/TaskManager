import React, { useState } from 'react'

const exampleTasks = [
  {name: 'task1'},
  {name: 'task2'},
  {name: 'task3'},
  {name: 'task4'},
  {name: 'task5'},
]

const Tasks = () => {
  const [tasks, setTasks] = useState(exampleTasks);
  return (
    <>
    <h2>Tasks</h2>
    {tasks && tasks.map((task) => (
      <div>
        <span>{task.name}</span>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    ))}
    </>
    
  )
}

export default Tasks