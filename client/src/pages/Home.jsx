import React from 'react'
import CreateTask from '../components/CreateTask'
import Tasks from '../components/Tasks'

const Home = () => {
  return (
    <main>
        <CreateTask/>
        <Tasks/>
    </main>
  )
}

export default Home