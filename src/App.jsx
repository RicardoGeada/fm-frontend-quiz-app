import { Route, Routes } from 'react-router-dom'
import './App.css'
import Start from './pages/Start/Start'
import Quiz from './pages/Quiz/Quiz'
import Score from './pages/Score/Score'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/score' element={<Score />} />
    </Routes>
  )
}

export default App
