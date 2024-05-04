import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Edit from "./pages/Edit";
import './styles/style.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/edit" element={<Edit/>}></Route>
        <Route path='*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App