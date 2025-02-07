import React from "react";
import {useCart} from '../context/CourseContext'
import "../Css/Cart.css"

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart() ;
  console.log(cart)
  return(
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((course) => (
            <li key={course.name}>
              <img src={course.image} alt={course.name} width="50" />
              <strong>{course.name}</strong> - ${course.Price}
              <button onClick={() => removeFromCart(course.name)}>❌ Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
