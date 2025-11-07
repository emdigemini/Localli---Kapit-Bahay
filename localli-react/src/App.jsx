import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import "aos/dist/aos.css";
import AOS from 'aos'
import { LoginPage } from "./pages/LoginPage"
import { ForYouPage } from './pages/ForYouPage';

function App() {
  useEffect(() => {
      AOS.init({
        duration: 900,
        once: true
      })  
    }, [])
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/login-page' element={<ForYouPage />} />
      </Routes>
    </>
  )
}

export default App
