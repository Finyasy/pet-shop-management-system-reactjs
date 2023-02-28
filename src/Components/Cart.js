import React from "react";

const Cart = ({ cartItems, removeCartItem }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeCartItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
