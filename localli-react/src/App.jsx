import 'bootstrap-icons/font/bootstrap-icons.css'
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from './pages/HomePage'
import { CommunityPage } from './pages/CommunityPage'
import { MessagePage } from './pages/MessagePage'
import { CreatePostProvider } from './utils/CreatePost'

function App() {
  useEffect(() => {
      AOS.init({
        duration: 900,
        once: true
      })  
    }, [])
  return (
    <>
      <CreatePostProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/' element={<Header />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/community' element={<CommunityPage />} />
            <Route path="/messages" element={<MessagePage />} />
          </Route>
        </Routes>
      </CreatePostProvider>
    </>
  )
}

export default App
