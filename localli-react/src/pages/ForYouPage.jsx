import { AsideSection } from '../components/AsideSection'

export function ForYouPage(){
  return (
    <div className="fyp-page">
      <div className="main-feed">
        <div className="post-box">
          <div className="user-profile"></div>
          <input type="text" placeholder="Post something..." />
          <div className="upload-img"></div>
        </div>
      </div>
    <AsideSection />
  </div>
  )
}