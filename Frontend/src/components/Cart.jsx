import React from "react";
import { useContext, useEffect } from "react";
import { travelContext } from "../App";
import axios from "axios";
function Cart() {
  const [cart, setCart] = useContext(travelContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/tours/Packages")
      .then((res) => {
        //console.log("Data from backend:", res.data.result);

        setCart(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {cart.foreach((item, i) => {
        return (
          <div key={i}>
            <p>{item.packageName}</p>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
