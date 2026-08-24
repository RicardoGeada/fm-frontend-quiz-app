import { Route, Routes } from 'react-router-dom'
import './App.css'
import Start from './pages/Start/Start'
import Quiz from './pages/Quiz/Quiz'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/quiz' element={<Quiz />} />
    </Routes>
  )
}

export default App
