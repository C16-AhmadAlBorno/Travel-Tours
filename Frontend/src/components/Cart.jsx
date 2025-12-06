import React, { useContext, useEffect } from "react";
import { travelContext } from "../App";
import axios from "axios";
import "./cart.css";

function Cart() {
  const { cart, setCart } = useContext(travelContext);

  // Get cart items
  useEffect(() => {
    axios
      .get("http://localhost:5000/Carts/items")
      .then((res) => {
        setCart(res.data.cart || []);
      })
      .catch((err) => console.log(err));
  }, []);

  const total = (cart || []).reduce(
    (t, p) => t + (p.tourpackage?.price || 0),
    0
  );

  return (
    <div className="cart-page">
      {/* LEFT - PRODUCTS */}
      <div className="cart-products">
        <h2 className="section-title">YOUR PRODUCTS</h2>

        {Array.isArray(cart) && cart.length > 0 ? (
          cart.map((item, i) => (
            <div key={i} className="cart-item">
              {/* image */}
              <img
                src={item.tourpackage?.hotel.images}
                alt="product"
                className="cart-item-img"
              />

              <div className="cart-item-details">
                <h3>{item.tourpackage?.packageName}</h3>

                <div className="price-row">
                  <span className="item-price">
                    ${item.tourpackage?.price}
                  </span>

                  <div className="quantity-box">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>

                  <button className="remove-btn">×</button>
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

      {/* RIGHT - PAYMENT */}
      <div className="cart-payment">
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

        <button className="buy-btn">BUY NOW</button>

        <a className="back-link" href="/">
          ← Back to shopping
        </a>
      </div>
    </div>
  );
}

export default Cart;
