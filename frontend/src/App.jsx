import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import RegisterPage from './Components/RegisterPage'
import LoginPage from './Components/LoginPage'
import Book from './Components/Books'
import Blog from './Components/Blog'
import ContactUs from './Components/ContactUs'
import Cart from './Components/Cart'
import AdminPanel from './Components/AdminPanel.jsx'


function App() {

  return (
  <>
  <Routes>
      <Route element={<Home />} path='/'  />
      <Route element={<RegisterPage />} path='/register' />
      <Route element={<LoginPage />} path='/login' />
      <Route element={<Book />} path='/book' />
      <Route element={<Blog />} path='/blog' />
      <Route element={<ContactUs />} path='/contact' />
      <Route element={<Cart />} path='/cart' />
      <Route element={<AdminPanel />} path='/Admin' />

  </Routes>
    </>
  )
}

export default App
