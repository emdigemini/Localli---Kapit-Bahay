import { ProfileCard } from '../components/ProfileCard'
import { SideFooter } from '../components/SideFooter'
import { PostFeed } from '../components/PostFeed'
import { AsideSection } from '../components/AsideSection'

export function HomePage(){
  return (
    <div className="fyp-page">
      <div className="left-side">
        <div className="left-side-cards">
          <ProfileCard />
          <SideFooter />
        </div>
        <PostFeed />
      </div>
    <AsideSection />
  </div>
  )
}

