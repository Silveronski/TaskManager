const Task = ({taskName,taskId}) => {
  return (
    <div className='task'>
      <span>{taskName}</span>
      <div className='btn-container'>
        <button>Delete</button>
        <button>Edit</button>
      </div>       
    </div>
  )
}

export default Task