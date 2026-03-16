import React from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import ProtectedRoute from "./routes/ProtectedRoute"

function App(){

 return(

  <div className="app-container">

   <Navbar/>

   <main className="content">

    <Routes>

     <Route path="/" element={<Home/>} />

     <Route 
      path="/cart" 
      element={
       <ProtectedRoute>
        <Cart/>
       </ProtectedRoute>
      } 
     />

     <Route path="/login" element={<Login/>} />

     <Route path="/signup" element={<Signup/>} />

    </Routes>

   </main>

   <Footer/>

  </div>

 )

}

export default App