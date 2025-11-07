import { useRef } from 'react'
import '../styles/fyp.css'

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
      <SideSection />
    </div>
  )
}

function SideSection(){
  const dropdown = useRef(null);
  function toggleDropdown(){
    dropdown.current.classList.toggle('active');
    console.log(dropdown.current.classList);
  }

  return (
    <aside className="sidebar">
      <section className="suggestions">
        <h2>Learners Who Need You</h2>
        <ul>
          <li>
            <span className="small-profile"></span>
            <p>USER ONE</p>
          </li>
          <li>
            <span className="small-profile"></span>
            <p>USER TWO</p>
          </li>
          <li>
            <span className="small-profile"></span>
            <p>USER THREE</p>
          </li>
          <li>
            <span className="small-profile"></span>
            <p>USER FOUR</p>
          </li>
        </ul>
      </section>

      <section className="tutor-preferences">
        <h2>Adjust Tutoring Preferences</h2>
        <div className="your-preferences">
          <div className="input-group-1">
            <div className="input-box">
              <label>
                What I Can Teach
              </label>
              <div onClick={toggleDropdown} 
                ref={dropdown}
                className="custom-select"
              >
                <div className="select-box">
                  Select Subject
                </div>
                <div className="subjects_dropdown">
                  <div className="category">
                    <p>Academic</p>
                    <div className="subjects">
                      <div className="subject">Math</div>
                      <div className="subject">English</div>
                      <div className="subject">Science</div>
                      <div className="subject">Test Prep (SAT/College Entrance)</div>
                    </div>
                  </div>

                  <div className="category">
                    <p>Skills</p>
                    <div className="subjects">
                      <div className="subject">Programming / Web Development</div>
                      <div className="subject">Music</div>
                      <div className="subject">Arts / Drawing</div>
                      <div className="subject">Data Science / Analytics</div>
                      <div className="subject">Video Editing / Graphic Design</div>
                      <div className="subject">Robotics / STEM Projects</div>
                    </div>
                  </div>
                  
                  <div className="category">
                    <p>Other</p>
                    <div className="subjects">
                      <div className="subject">Communication / Public Speaking</div>
                      <div className="subject">Study Skills / Time Management</div>
                      <div className="subject">Financial Literacy</div>
                      <div className="subject">Career Mentorship</div>
                      <div className="subject">Creative Writing</div>
                      <div className="subject">Entreprenurship / Problem Solving</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="input-box">
              <label htmlFor="levels">Preferred Levels</label>
              <select name="levels" id="levels">
                <option value="" disabled>Select level</option>
                <option value="adult">Adult</option>
                <option value="college">College Student</option>
                <option value="highschool">Highschool Student</option>
                <option value="gradeschool">Gradeschool Student</option>
              </select>
            </div>

            <div className="input-box">
              <label htmlFor="rate">Preferred Rate</label>
              <input type="text" placeholder="70/hr"/>
            </div>
          </div>
        </div>
        <div className="input-group-2">
          <div className="input-box">
            <label htmlFor="mode">Tutoring Mode</label>
            <select name="mode" id="mode">
              <option value="" disabled>Select</option>
              <option value="online">Online</option>
              <option value="f2f">Face to Face</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="input-box">
            <label htmlFor="weektime">Availability</label>
            <div className="radio-group">
              <div className="radio-box">
                <input type="radio" name="availability" id="morning" value="morning" />
                <label htmlFor="morning">Morning</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="availability" id="afternoon" value="afternoon" />
                <label htmlFor="afternoon">Afternoon</label>
              </div>
              <div className="radio-box">
                <input type="radio" name="availability" id="evening" value="evening" />
                <label htmlFor="evening">Evening</label>
              </div>
            </div>
            <select name="weektime" id="weektime">
              <option value="" disabled>Select</option>
              <option value="weekdays">Weekdays - M, T, W, T, F</option>
              <option value="weekend">Weekend - Saturday, Sunday</option>
            </select>

            <select name="employment" id="employment">
              <option value="part-time">Part-Time</option>
              <option value="full-time">Full-Time</option>
            </select>
          </div>
        </div>
      </section>
    </aside>
  )
}