import 'bootstrap-icons/font/bootstrap-icons.css'
import "aos/dist/aos.css"
import AOS from 'aos'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { LoginPage } from "./pages/LoginSignup/LoginPage"
import { HomePage } from './pages/Home/HomePage'
import { CommunityPage } from './pages/Community/CommunityPage'
import { MessagePage } from './pages/Message/MessagePage'
import { CreatePostProvider } from './context/PostContext'
import { PostProvider } from './context/PostContext'
import { PrevMediaProvider } from './context/PostContext'

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
        <PostProvider>
          <PrevMediaProvider>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/' element={<Header />}>
                <Route path='/home' element={<HomePage />} />
                <Route path='/community' element={<CommunityPage />} />
                <Route path="/messages" element={<MessagePage />} />
              </Route>
            </Routes>
          </PrevMediaProvider>
        </PostProvider>
      </CreatePostProvider>
    </>
  )
}

export default App
