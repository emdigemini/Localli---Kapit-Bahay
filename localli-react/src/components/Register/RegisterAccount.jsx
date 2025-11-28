import { useState } from "react"

export function RegisterAccount({ setToggleRegister, role }){
  const [ applyPremium, setApplyPremium ] = useState(false);

  return (
    <div className="register-overlay">
      <div className="register_modal-card">
        <i onClick={() => setToggleRegister(false)} class="bi bi-x"></i>
        <p className="kapit-bahay">Kapit <span>Bahay</span></p>
        {applyPremium 
        ? <PremiumAccount role={role} /> 
        : <FreeAccount role={role} setApplyPremium={setApplyPremium} /> }
      </div>
    </div>
  )
}

function FreeAccount({ role, setApplyPremium }){
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  
  return (
    <>
      <form action="">
        <h2>Register free account</h2>
        <div className="input-group">
          <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder=' ' required />
          <label className={`${email.length > 0 ? 'up' : ''}`} htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => setName(e.target.value)} id="name" type="name" placeholder=' ' required />
          <label className={`${name.length > 0 ? 'up' : ''}`} htmlFor="name">Name</label>
        </div>
        <div className="input-group">
          <input onChange={(e) => setPassword(e.target.value)} id="password" type={showPassword ? 'text' : 'password'} placeholder=' ' required />
            <label className={`${password.length > 0 ? 'up' : ''}`} htmlFor="password">Password</label>
            {password.length > 0 && (
              <>
                <div onClick={() => setShowPassword(!showPassword)} className="toggle-show">
                  <i className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
                </div>
              </>
            )}
        </div>
        <div className="input-group">
          <input onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder=' ' required />
            <label className={`${confirmPassword.length > 0 ? 'up' : ''}`} htmlFor="confirmPassword">Confirm Password</label>
            {confirmPassword.length > 0 && (
              <>
                <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-show2">
                  <i className={`${showConfirmPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
                </div>
              </>
            )}
        </div>
      <button type="submit">REGISTER ACCOUNT</button>
      {role === 'tutor' && 
          <div className="disclaimer">
            <input id="checkthis" type="checkbox" required />
            <label htmlFor="checkthis">By registering, you agree to provide assistance to students free of charge.</label>
          </div>
          }
      </form>
      <div className="switch-premium">
        <p>Upgrade to Premium <br /> 
          <span>
            {role === 'student' 
              ? "Unlock exclusive tools and connect with the best tutors near you"
              : "Stand out in search results and attract more students."}
          </span>
        </p>
        <a onClick={() => {setApplyPremium(true)}}>Apply for Premium account</a>
      </div>
    </>
  )
}

function PremiumAccount({ role }){
  return (
    <>
      <p>This is for Premium Account registration.</p>
    </>
  )
}