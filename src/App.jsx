import {
  BrowserRouter,Routes,Route
} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Tasks from "./components/Tasks"
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/tasks" element={<Tasks/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
