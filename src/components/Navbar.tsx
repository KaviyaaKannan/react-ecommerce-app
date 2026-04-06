import React from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout as logoutAction } from "../redux/authSlice"
import { RootState } from "../redux/store"

function Navbar() {

 const navigate = useNavigate()
 const location = useLocation()
 const dispatch = useDispatch()

 const cartItems = useSelector(
  (state:any)=>state.cart.items
 )

 const user = useSelector((state: RootState) => state.auth.user)

 const hideMenu =
  location.pathname === "/login" ||
  location.pathname === "/signup"

 const logout = () => {

  dispatch(logoutAction())

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