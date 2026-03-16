import React from "react"
import { useSelector,useDispatch } from "react-redux"

import {
 increaseQty,
 decreaseQty,
 removeFromCart
} from "../redux/cartSlice"

function Cart(){

 const cart =
  useSelector((state:any)=>state.cart.items)

 const dispatch = useDispatch()

 if(cart.length === 0){

  return(

   <div className="empty-cart">

    <h2>Your Cart is Empty</h2>

    <p>Start adding products</p>

    <a href="/">Go to Products</a>

   </div>

  )

 }

 const total = cart.reduce(

  (sum:number,item:any)=>
   sum + item.price * item.quantity

 ,0)

 const decrease = (id:number,qty:number)=>{

  if(qty<=1){
   dispatch(removeFromCart(id))
  }else{
   dispatch(decreaseQty(id))
  }

 }

 return(

  <div className="cart">

   <h2>Cart</h2>

   {cart.map((item:any)=>(

    <div className="cart-item">

     <h4>{item.title}</h4>

     <p>${item.price}</p>

     <div className="qty">

      <button
       onClick={()=>
        decrease(item.id,item.quantity)
       }
      >
       -
      </button>

      <span>{item.quantity}</span>

      <button
       onClick={()=>
        dispatch(increaseQty(item.id))
       }
      >
       +
      </button>

     </div>

    </div>

   ))}

   <h3>Total: ${total.toFixed(2)}</h3>

  </div>

 )

}

export default Cart