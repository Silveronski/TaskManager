import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksContextProvider } from "./context/TasksContext";
import Home from "./pages/Home"
import Edit from "./pages/Edit";
import './styles/style.scss';
import {useTasks} from "./hooks/useTasks";

function App() {
  const { tasks, createTask } = useTasks();
  return (
    <TasksContextProvider tasks={tasks} createTask={createTask}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/edit" element={<Edit/>}></Route>
          <Route path='*' element={<Navigate to={'/'}/>}></Route>
        </Routes>
      </BrowserRouter>
    </TasksContextProvider>
  )
}

export default App