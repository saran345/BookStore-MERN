import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Demo from './Components/demo'
import RegisterPage from './Components/RegisterPage'

function App() {

  return (
  <>
  <Routes>
      <Route element={<Home />} path='/home' />
      <Route element={<Demo />} path='/Demo' />
      <Route element={<RegisterPage />} path='/' />
  </Routes>
    </>
  )
}

export default App
