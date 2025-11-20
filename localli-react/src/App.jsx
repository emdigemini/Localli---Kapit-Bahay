import 'bootstrap-icons/font/bootstrap-icons.css'
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from './pages/HomePage'
import { MessagePage } from './pages/MessagePage'

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
        <Route path="/login-page" element={<LoginPage />} />
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="messages" element={<MessagePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
