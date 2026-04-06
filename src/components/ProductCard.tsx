import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }: any) {

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.items);

  const isAdded = cart.find((item: any) => item.id === product.id);

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  // IMAGE MAPPING
  const getImage = (product: any) => {
    const title = product.title.toLowerCase();

    // ELECTRONICS
    if (title.includes("iphone")) return "/images/iphone.jpg";
    if (title.includes("tv")) return "/images/samsung tv.jpeg";
    if (title.includes("laptop")) return "/images/laptop.jpg";
    if (title.includes("headphone")) return "/images/headphones.png";
    if (title.includes("smart")) return "/images/smart watch.jpg";
    if (title.includes("camera")) return "/images/camera.webp";
    if (title.includes("tablet")) return "/images/tablet.jpg";
    if (title.includes("console")) return "/images/console.webp";
    if (title.includes("earbud")) return "/images/earbuds.jpg";

    // JEWELERY
    if (title.includes("necklace")) return "/images/gold necklace.webp";
    if (title.includes("diamond ring")) return "/images/gold ring.webp";
    if (title.includes("bracelet")) return "/images/silver bracelet.webp";
    if (title.includes("earring")) return "/images/earring.jpg";
    if (title.includes("pendant")) return "/images/pendant.jpg";
    if (title.includes("gold ring")) return "/images/gold ring.webp";

    // MEN
    if (title.includes("t-shirt")) return "/images/men t shirt.webp";
    if (title.includes("jeans")) return "/images/men jeans.jpg";
    if (title.includes("jacket")) return "/images/men jacket.jpg";
    if (title.includes("shoes")) return "/images/men shoes.webp";
    if (title.includes("hoodie")) return "/images/men hoodie.webp";
    if (title.includes("cap")) return "/images/Mens cap.jpeg";
    if (title.includes("belt")) return "/images/men belt.jpg";

    // WOMEN
    if (title.includes("dress")) return "/images/women dress.webp";
    if (title.includes("top")) return "/images/women top.png";
    if (title.includes("skirt")) return "/images/women skirt.jpg";
    if (title.includes("handbag")) return "/images/women handbag.jpg";
    if (title.includes("sandals")) return "/images/women sandals.jpg";
    if (title.includes("watch")) return "/images/women watch.webp";
    if (title.includes("saree")) return "/images/women saree.jpg";
    if (title.includes("sweater")) return "/images/Jacket.jpg";

    return "/images/iphone.jpg"; // fallback
  };

  return (
    <div className="product-card">

      <img
        src={getImage(product)}
        alt={product.title}
      />

      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <button onClick={handleAdd} disabled={isAdded}>
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>

    </div>
  );
}

export default ProductCard;