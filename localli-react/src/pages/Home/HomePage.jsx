import { SideCards } from '../../components/Header/SideCards'
import { PostFeed } from '../../components/Home/PostFeed'
import { AsideSection } from '../../components/Home/AsideSection'

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

