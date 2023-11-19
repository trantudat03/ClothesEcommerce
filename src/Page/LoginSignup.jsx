import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import axios from 'axios';
import Login from './Login.jsx';
import { Link } from 'react-router-dom';
const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  // console.log(name);
  function handSignUp(ev) {
    ev.preventDefault() ;
    try{
      if(name && email && password) {
        axios.post('/signup', {
          name,
          email,
          password
        }).then(response => {
          alert('signup successful. Now you can log in');
        })
        .catch(e => {
          alert('signup failed. Please try again later');
        })
        
      }else{
        alert('fail');
      }
    }catch(e){
      alert('signup failed. Please try again later');
    }
    
    
  }

  return (
    <div>
      <form onSubmit={handSignUp} className='loginsignup '>
            <div className='loginsignup-container '>
              <h1 className='text-primary text-2xl mb-10'>Sign Up</h1>
              <div className='loginsignup-fields mt-5' >
                <input value={name} onChange={(ev) => setName(ev.target.value)} type='text' placeholder='Your Name'/>
                <input value={email} onChange={(ev) => setEmail(ev.target.value)} type='email' placeholder='Your Email'/>
                <input value={password} onChange={(ev) => setPassword(ev.target.value)} type='password' placeholder='Your Password'/>
              </div>
              <button className='p-5 w-full'>Continue</button>
              <p className='loginsignup-login'>Already have an account? <Link to={'/login'} className='login_here'>Login here</Link></p>
              <div className='loginsignup-agree'>
                  <input type='checkbox' name='' id=''/>
                  <p>By continuing, i agree to the terms of use & privacy policy.</p>
              </div>
            </div>
      </form>
      {login && (<Login />)}
    </div>
    
  )
}

export default LoginSignup