import '../styles/loginpage.css'
import '../styles/animation.css'
import AOS from "aos";
import { useState, useEffect } from 'react'

export function LoginPage(){
  const [switched, setSwitched] = useState(false);
  const [wasSwitched, setWasSwitched] = useState(false);

  function switchPage(){
    setWasSwitched(switched);
    setSwitched(!switched);
  }

  useEffect(() => {
    AOS.refresh();
  }, [switched]);

  return (
    <>
      <div className="login-page">
        <div onClick={switchPage} className={
          `orange-box ${switched ? 'switch' 
          : wasSwitched ? 'unswitch' : ''}`
          }>
          {switched
          ? <OrangeBox_Students />
          : <OrangeBox_Tutors />
          }
        </div>

        <div className={
          `login-box ${switched ? 'switch' 
          : wasSwitched ? 'unswitch' : ''}`
          }>
          {switched 
          ? <LoginHeader_Students />
          : <LoginHeader_Tutors />
          }
        </div>
      </div>
    </>
  )
}

function OrangeBox_Students(){
  return (
    <>
      <div className="orange-box_headings"
        data-aos="zoom-in-down"
      >
      <h1>WANT TO <br /> BE A TUTOR?</h1>
        <a id='switch-box' href='#'>Switch here and find your learners.</a>
      </div>
      <div className="orange-box_img"
        data-aos="zoom-in-up"
      >
        <img src="../../public/image/6611984.png" draggable="false" />
      </div>
    </>
  )
}

function OrangeBox_Tutors(){
  return (
    <>
      <div className="orange-box_headings"
        data-aos="zoom-in-down"
      >
        <h1>WANT TO <br /> HIRE A TUTOR?</h1>
        <a id='switch-box' href='#'>Switch here to find one.</a>
      </div>
      <div className="orange-box_img"
        data-aos="zoom-in-up"
      >
        <img src="../../public/image/4600945.png" draggable="false" />
      </div>
    </>
  )
}

function LoginHeader_Students(){
  return (
    <>
      <div className="login-box__header"
        data-aos="zoom-in"
        data-aos-duration="400"
      >
        <h1>LOOKING FOR A TUTOR?</h1>
        <h2>Find trusted tutors in your community and start learning today.</h2>
      </div>

      <div className="input-box" 
        data-aos="zoom-in"
        data-aos-duration="400"
        >
        <div className="input-group">
          <input id="email_username" type="text" placeholder=' ' required />
          <label htmlFor="email_username">Email or username</label>
        </div>
        <div className="input-group">
          <input id="password" type="text" placeholder=' ' required />
          <label htmlFor="password">Password</label>
        </div>
        <div className="auth-links">
          <a href='#'>Forgot password?</a>
          <a href='#'>Don't have an account?</a>
        </div>
        <div className="btn-group">
          <button className='login-btn'>LOGIN</button>
          <button className='signup-btn'>CREATE ACCOUNT</button>
        </div>
      </div>

      <a data-aos="zoom-in" id='contact-support' href="#">Contact support.</a>
    </>
  )
}

function LoginHeader_Tutors(){
  return (
    <>
      <div className="login-box__header"
        data-aos="zoom-in"
        data-aos-duration="400"
      >
        <h1>GOT A SKILLS TO TEACH?</h1>
        <h2>Share your knowledge, connect with learners and get paid.</h2>
      </div>

      <div className="input-box" 
        data-aos="zoom-in"
        data-aos-duration="400"
        >
        <div className="input-group">
          <input id="email_username" type="text" placeholder=' ' required />
          <label htmlFor="email_username">Email or username</label>
        </div>
        <div className="input-group">
          <input id="password" type="text" placeholder=' ' required />
          <label htmlFor="password">Password</label>
        </div>
        <div className="auth-links">
          <a href='#'>Forgot password?</a>
          <a href='#'>Don't have an account?</a>
        </div>
        <div className="btn-group">
          <button className='login-btn'>LOGIN</button>
          <button className='signup-btn'>CREATE ACCOUNT</button>
        </div>
      </div>

      <a data-aos="zoom-in" id='contact-support' href="#">Contact support.</a>
    </>
  )
}