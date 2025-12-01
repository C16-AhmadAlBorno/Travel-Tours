import React from "react";
import { travelContext } from "../App";
import { useContext } from "react";
function Cart() {
  const [cart, setCart] = useContext(travelContext);
  return <div>
    {}

  </div>;
}

export default Cart;
