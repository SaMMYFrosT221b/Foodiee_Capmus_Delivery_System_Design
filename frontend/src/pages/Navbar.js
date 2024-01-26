import React, { useEffect, useState } from "react";
// import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ cartNumber, cartItems }) {
  //   const [cartNumber, setCartNumber] = useState(0);

  //   const numberFromLocalStorage = localStorage.getItem("number");

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("Token");
    navigate("/login");
    console.log(
      "This is Token form local Storage:",
      localStorage.getItem("Token")
    );
  };

  console.log(cartItems);

  //   const listItems = cartItems.map((item) => {
  //     <li>{item}</li>;
  //   });

  return (
    <>
      <div className="flex justify-around items-center">
        <div className="px-0 py-7 ml-20 flex items-center">
          <div>
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
              alt="Swiggy Logo"
              width={140} // Adjust the width based on your design
              height={70}
            />
            {/* <img src="https://as1.ftcdn.net/v2/jpg/02/41/30/72/1000_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" width={} /> */}
          </div>
          <div className="h-6 border-r border-gray-400 mx-4"></div>
          <a href="" className="flex items-center">
            <FaLocationArrow className="pt-1" size={33} />
            <h1 className="font-bold pt-1 ml-1 text-xl">
              Setup your precise location
            </h1>
            <RiArrowDropDownLine className="" size={29} />
          </a>
        </div>
        <div className="flex items-center">
          <form>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-[32rem] h-20 border rounded-3xl bg-gray-200 text-2xl"
              placeholder="   Search for Restaurant and Food"
            />
          </form>
          <a href="">
            <MdAccountCircle className="ml-4" size={50} />
          </a>

          <button
            className="text-2xl border p-3 text-red-500 ml-5 "
            onClick={handleLogOut}
          >
            {" "}
            Logout{" "}
          </button>
        </div>
        <span>
          {/* <button id="cart" onClick={() => setCartNumber(cartNumber + 1)}> */}
          <button>
            <spam>
              <RiShoppingCart2Line />
              <div className="App relative">
                <a
                  href="#"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="text-blue-500 hover:text-blue-800"
                >
                  Cart: {cartNumber}
                </a>
                {isHovered && (
                  <div
                    className="absolute bg-white text-black border border-gray-200 p-2 mt-2 rounded shadow-lg"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* <p className="">{cartItems}</p> */}
                    {cartItems.map((item, index) => (
                      <div key={index}>
                        <p className="">
                          {item.itemName}
                          {item.itemQuantity}
                          {item.itemPrice * item.itemQuantity}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </spam>
          </button>
        </span>
      </div>

      {/* <hr className="my-4 border-t border-gray-300" /> */}
    </>
  );
}

export default Navbar;
