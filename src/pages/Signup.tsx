import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {

 const navigate = useNavigate()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [confirmPassword,setConfirmPassword] = useState("")
 const [error,setError] = useState("")

 const validateEmail = (email:string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
 }

 const signup = () => {

  const users =
   JSON.parse(localStorage.getItem("users") || "[]")

  if(!validateEmail(email)){
   setError("Enter valid email address")
   return
  }

  if(password.length < 6){
   setError("Password must be at least 6 characters")
   return
  }

  if(password !== confirmPassword){
   setError("Passwords do not match")
   return
  }

  const existingUser = users.find(
   (u:any)=>u.email === email
  )

  if(existingUser){
   setError("User already exists")
   return
  }

  users.push({email,password})

  localStorage.setItem(
   "users",
   JSON.stringify(users)
  )

  navigate("/login")

 }

 return(

  <div className="auth">

   <h2>Signup</h2>

   {error && <div className="error-box">{error}</div>}

   <input
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
   />

   <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
   />

   <input
    type="password"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e)=>setConfirmPassword(e.target.value)}
   />

   <button onClick={signup}>
    Signup
   </button>

   <p className="auth-link">
    Already have account? <a href="/login" className="link">Login</a>
   </p>

  </div>

 )

}

export default Signup