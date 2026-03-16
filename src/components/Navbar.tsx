import React from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

function Navbar() {

 const navigate = useNavigate()
 const location = useLocation()

 const cartItems = useSelector(
  (state:any)=>state.cart.items
 )

 const user = localStorage.getItem("user")

 const hideMenu =
  location.pathname === "/login" ||
  location.pathname === "/signup"

 const logout = () => {

  localStorage.removeItem("user")

  navigate("/login")

 }

 return (

  <div className="navbar">

   <h2>ReactShop</h2>

   {!hideMenu && (

    <div>

     <Link to="/">Home</Link>

     <Link to="/cart">
      Cart ({cartItems.length})
     </Link>

     {user && (
      <button onClick={logout}>
       Logout
      </button>
     )}

    </div>

   )}

  </div>

 )

}

export default Navbar