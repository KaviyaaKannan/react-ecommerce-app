import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login as loginAction } from "../redux/authSlice"

function Login(){

 const navigate = useNavigate()
 const dispatch = useDispatch()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [error,setError] = useState("")

 const login = () => {

  const users =
   JSON.parse(localStorage.getItem("users") || "[]")

  const validUser = users.find(
   (u:any)=>u.email === email && u.password === password
  )

  if(!validUser){

   setError("Invalid email or password")

   return
  }

 dispatch(loginAction(validUser))

navigate("/")

 }

 return(

  <div className="auth">

   <h2>Login</h2>

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

   <button onClick={login}>
    Login
   </button>

   <p className="auth-link">
    Don't have account? <a href="/signup" className="link">Signup</a>
   </p>

  </div>

 )

}

export default Login