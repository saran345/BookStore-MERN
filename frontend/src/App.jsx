import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import RegisterPage from './Components/RegisterPage'
import LoginPage from './Components/LoginPage'
import Book from './Components/Books'

function App() {

  return (
  <>
  <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<RegisterPage />} path='/register' />
      <Route element={<LoginPage />} path='/login' />
      <Route element={<Book />} path='/book' />
      
  </Routes>
    </>
  )
}

export default App
