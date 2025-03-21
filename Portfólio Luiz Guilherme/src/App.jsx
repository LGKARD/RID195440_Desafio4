import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'

//PAGES
import Home from './pages/home'
import Projects from './pages/projects'
import Tecnologies from './pages/tecnologies'
import About from './pages/about'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/tecnologies" element={<Tecnologies />} ></Route>
        <Route path="/about" element={<About />} ></Route>
      </Routes>
    </Router>
  )
}

export default App
