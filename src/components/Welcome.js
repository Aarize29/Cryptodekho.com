import React, { useState,useEffect } from 'react'
import {signInWithEmailAndPassword,onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
function Welcome() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)   
    const [registerInformation, setRegisterInformation] = useState({
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    })   
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/homepage')
            }
        })
    }, [])
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email, password).then(()=>{
            navigate('/homepage')
        }).catch((error) => {
            alert(error.message)
        })
    }
    const handleRegister = () => {
        if(registerInformation.email !== registerInformation.confirmEmail){
            alert('Emails do not match')
            return
        }
        if(registerInformation.password !== registerInformation.confirmPassword){
            alert('Passwords do not match')
            return
        }
        createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password).then(()=>{
            navigate('/homepage')
        }).catch((error) => {
            alert(error.message)
        })
    }

  return (
    <div className='welcome'>
      <h1>Welcome To CryptoDekho.com</h1>
      <div className='login-register-container'>
         {isRegistering ? (
         <div className='signInPage'>
             <h3><b>Please Create an account</b></h3>
        <input type="email"  placeholder='Enter Email' value={registerInformation.email} 
        onChange={(e)=>setRegisterInformation({...registerInformation, email:e.target.value})}/>

        <input type="email"  placeholder='Confirm Email' value={registerInformation.confirmEmail} onChange={(e)=>setRegisterInformation({...registerInformation, confirmEmail:e.target.value})}/>

        <input type="password" placeholder='Enter Password' value={registerInformation.password} onChange={(e)=>setRegisterInformation({...registerInformation, password:e.target.value})}/>

        <input type="password" placeholder='Confirm Password' value={registerInformation.confirmPassword} onChange={(e)=>setRegisterInformation({...registerInformation, confirmPassword:e.target.value})}/>
         <div className='buttons'>
         <button onClick={handleRegister}>Login In</button>
        <button onClick={()=>{setIsRegistering(false)}}>Go back</button>
         </div>
        <hr />
         <button className='googleAuth'>SignIn With Google</button>
         </div>):(
         <div className='loginPage'>
            <h3><b>Please Login To get started</b></h3>
         <input type="email" placeholder='Enter Email' onChange={handleEmailChange} value={email}/>
        <input type="password" placeholder='Enter Password' onChange={handlePasswordChange} value={password}/>
        <button onClick={handleSignIn}>Login In</button>
        <button onClick={()=>{setIsRegistering(true)}}>Create an account</button>
         </div>
         ) }
      </div>
    </div>
  )
}

export default Welcome
