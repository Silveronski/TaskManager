import { useState } from "react"

const Input = () => {

  const [error, setError] = useState(false);

  return (
    <section className='input-container'>
        <div className="input-wrapper">
          <h1>Task Manager</h1>
          <div>
            <input type="text"/>
            <button>Submit</button>
          </div>
          {error && <span>ERROR</span>}
        </div>      
    </section>
  )
}

export default Input