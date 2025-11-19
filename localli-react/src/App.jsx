import 'bootstrap-icons/font/bootstrap-icons.css'
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from './pages/HomePage'

function App() {
  useEffect(() => {
      AOS.init({
        duration: 900,
        once: true
      })  
    }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login-page' element={<LoginPage />} />
        <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
