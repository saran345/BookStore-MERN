import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'


function App() {

  return (
  <>
  <Routes>
      <Route element={<Home />} path='/home' />
  </Routes>
    </>
  )
}

export default App
