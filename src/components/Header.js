import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const { LoggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between  bg-violet-200">
      <div>
        <img
          className="w-36"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        />
      </div>
      <div className=" flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">
            online status: {onlineStatus ? "green" : "red"}
          </li>
          <li className="px-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <button
            onClick={() =>
              setBtnName(btnName === "LogIn" ? "Log Out" : "LogIn")
            }
            className="px-2"
          >
            {LoggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
