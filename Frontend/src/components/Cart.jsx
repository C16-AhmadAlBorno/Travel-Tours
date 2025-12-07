import React, { useContext, useEffect, useState } from "react";
import { travelContext } from "../App";
import axios from "axios";
import "./cart.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function Cart() {
  const { cart, setCart } = useContext(travelContext);
  const [count, setCount] = useState(0);

  const increse = () => {
    setCount(count + 1);
  };
  const decrese = () => {
    setCount(count - 1);
  };
  // Get cart items
  useEffect(() => {
    axios
      .get("http://localhost:5000/Carts/items")
      .then((res) => {
        setCart(res.data.cart || []);
      })
      .catch((err) => console.log(err));
  }, []);
  //delete from cart
  const cartDel = (id) => {
    axios
      .delete("http://localhost:5000/Carts/delete/$")
      .then((res) => {
        console.log(res.data.result);

        setCart(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const total = (cart || []).reduce(
    (t, p) => t + (p.tourpackage?.price || 0),
    0
  );
  console.log(cart);

  return (
    <div className="cart-page">
      <div className="cart-products">
        <h2 className="section-title">Your Packages</h2>

        {Array.isArray(cart) && cart.length > 0 ? (
          cart.map((item, i) => (
            <div key={i} className="cart-item">
              <img
                src={item.hotel.images}
                alt="product"
                className="cart-item-img"
              />

              <div className="cart-item-details">
                <h3>{item.tourpackage?.packageName}</h3>

                <div className="price-row">
                  <span className="item-price">${item.tourpackage?.price}</span>

                  <div className="quantity-box">
                    <button onClick={decrese}>-</button>
                    <span>{count}</span>
                    <button onClick={increse}>+ </button>
                  </div>

                  <button className="remove-btn" onClick={cartDel}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart">Your cart is empty 😢</p>
        )}

        <hr className="divider" />

        <div className="summary-row">
          <span>Discount:</span>
          <span>0$</span>
        </div>

        <div className="summary-total">
          <span>Total:</span>
          <span className="total-box">{total}$</span>
        </div>
      </div>

      <div className="cart-payment">
        <PayPalScriptProvider options={{ clientId: "test" }}>
          <h2 className="section-title">PAYMENT</h2>

          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3457" />

          <label>Name on card</label>
          <input type="text" placeholder="John Smith" />

          <div className="payment-row">
            <div>
              <label>Expiration</label>
              <input type="text" placeholder="01/22" />
            </div>

            <div>
              <label>Cvv</label>
              <input type="password" placeholder="•••" />
            </div>
          </div>

          <p className="payment-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit obcaecati.
          </p>

          <PayPalButtons style={{ layout: "horizontal" }} />

          <a className="back-link" href="/">
            ← Back to shopping
          </a>
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default Cart;
