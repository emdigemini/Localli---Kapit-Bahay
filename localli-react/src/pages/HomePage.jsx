import { SideCards } from '../components/SideCards'
import { PostFeed } from '../components/PostFeed'
import { AsideSection } from '../components/AsideSection'

export function HomePage(){

  return (
    <>
      <div className="fyp-page">
        <div className="left-side">
          <SideCards />
          <PostFeed />
        </div>
        <AsideSection />
      </div>
    </>
  )
}

