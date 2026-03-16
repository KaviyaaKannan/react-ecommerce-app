import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cartSlice"

function ProductCard({ product }: any) {

  const dispatch = useDispatch()

  const cart = useSelector((state: any) => state.cart.items)

  const isAdded = cart.find((item: any) => item.id === product.id)

  const handleAdd = () => {
    dispatch(addToCart(product))
  }

  return (

    <div className="product-card">

      <img src={product.image} />

      <h4>{product.title}</h4>

      <p>${product.price}</p>

      <button
        onClick={handleAdd}
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>

    </div>

  )
}

export default ProductCard