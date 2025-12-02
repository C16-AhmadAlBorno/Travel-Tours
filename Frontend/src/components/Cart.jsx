import React from "react";
import { useContext, useEffect } from "react";
import { travelContext } from "../App";
import axios from "axios";
function Cart() {
  const { cart, setCart } = useContext(travelContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/Carts/items")
      .then((res) => {
        //console.log("Data from backend:", res.data.result);

        setCart(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {cart.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.price}</p>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
