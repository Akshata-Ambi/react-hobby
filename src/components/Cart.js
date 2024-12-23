import React from "react";
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };
  return cartItems.length === 0 ? (
    <div className="text-center p-2 w-6/12 m-auto">
      <div className="text-lg font-bold">
        Your Cart is Empty :(. Please add Items
      </div>
    </div>
  ) : (
    <div className="text-center p-2 w-6/12 m-auto">
      <h1 className="text-xxl font-bold">CART</h1>
      <button
        className="bg-black text-white p-2 m-2 rounded-lg"
        onClick={() => handleClick()}
      >
        Clear Cart
      </button>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
