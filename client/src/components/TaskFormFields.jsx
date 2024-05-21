const TaskFormFields = ({text, inputType, inputValue, disabled = false, error = false}) => {
  return (
    <div>
        <label>{text}</label>
        {inputType === 'text' ? 
        <input type={inputType} defaultValue={inputValue} disabled={disabled}/> :   
        <input type={inputType} defaultChecked={inputValue}/>}
        {error && <div className='error'>{error}</div>}
    </div>
  )
}

export default TaskFormFields