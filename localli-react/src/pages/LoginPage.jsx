import AOS from "aos";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from 'react'

export function LoginPage(){
  const [switched, setSwitched] = useState(false);
  const [wasSwitched, setWasSwitched] = useState(false);
  const orangeBox = useRef({});
  const navigate = useNavigate();

  function switchPage(){
    setWasSwitched(switched);
    setSwitched(!switched);
    console.log(orangeBox.current.className);
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
          ? <LoginHeader_Students navigate={navigate} />
          : <LoginHeader_Tutors navigate={navigate} />
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

function LoginHeader_Students({ navigate }){
  const [value1, setValue1] = useState("");
  const [password, setPassword] = useState("");
  const [ showPassword, setShowPassword ] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  }

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
          <input onChange={(e) => setValue1(e.target.value)} id="email_username" type="text" placeholder=' ' required />
          <label className={`${value1.length > 0 ? 'up' : ''}`} htmlFor="email_username">Email or username</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => setPassword(e.target.value)} id="password" type={showPassword ? 'text' : 'password'} placeholder=' ' required />
          <label className={`${password.length > 0 ? 'up' : ''}`} htmlFor="password">Password</label>
          {password.length > 0 && (
            <>
              <div onClick={showPass} className="toggle-pass">
                <i className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
              </div>
            </>
          )}
        </div>
        <div className="auth-links">
          <a href='#'>Forgot password?</a>
          <a href='#'>Don't have an account?</a>
        </div>
        <div className="btn-group">
          <button className='login-btn' 
            onClick={() => navigate("home")}
          >LOGIN</button>
          <button className='signup-btn'>CREATE ACCOUNT</button>
        </div>
      </div>

      <a data-aos="zoom-in" id='contact-support' href="#">Contact support.</a>
    </>
  )
}

function LoginHeader_Tutors({ navigate }){
  const [value1, setValue1] = useState("");
  const [password, setPassword] = useState("");
  const [ showPassword, setShowPassword ] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  }

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
          <input onChange={(e) => setValue1(e.target.value)} id="email_username" type="text" placeholder=' ' required />
          <label className={`${value1.length > 0 ? 'up' : ''}`} htmlFor="email_username">Email or username</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => setPassword(e.target.value)} id="password" type={showPassword ? 'text' : 'password'} placeholder=' ' required />
          <label className={`${password.length > 0 ? 'up' : ''}`} htmlFor="password">Password</label>
          {password.length > 0 && (
            <>
              <div onClick={showPass} className="toggle-pass">
                <i className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
              </div>
            </>
          )}
        </div>
        <div className="auth-links">
          <a href='#'>Forgot password?</a>
          <a href='#'>Don't have an account?</a>
        </div>
        <div className="btn-group">
          <button className='login-btn'
            onClick={() => navigate("home")}
          >LOGIN</button>
          <button className='signup-btn'>CREATE ACCOUNT</button>
        </div>
      </div>

      <a data-aos="zoom-in" id='contact-support' href="#">Contact support.</a>
    </>
  )
}