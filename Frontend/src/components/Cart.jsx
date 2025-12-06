import React, { useContext, useEffect } from "react";
import { travelContext } from "../App";
import axios from "axios";
import "./cart.css"; // 🔥 استدعاء ملف التصميم الجديد

function Cart() {
  const { cart, setCart } = useContext(travelContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Carts/items")
      .then((res) => {
        setCart(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {Array.isArray(cart) && cart.length > 0 ? (
        cart.map((item, i) => {
          return (
            <div key={i} className="cart-card">
              <div className="cart-info">
                <h3 className="cart-item-title">{item.packageName}</h3>
                <p className="cart-item-price">${item.price}</p>
              </div>

              <img
                src={item.image}
                alt="package"
                className="cart-item-img"
              />
            </div>
          );
        })
      ) : (
        <p className="empty-cart">Your cart is empty 😢</p>
      )}
    </div>
  );
}

export default Cart;