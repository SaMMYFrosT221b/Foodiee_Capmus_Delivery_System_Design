"use client";
import { useState, useContext } from "react";
import Navbar from "./Navbar";
import { CartContext } from "../App";
import axios from "axios";

const Cart = () => {
  //   const cartItems = [
  //     { itemName: "Burger", itemQuantity: 4, itemPrice: 20 },
  //     { itemName: "Sandwitch", itemQuantity: 10, itemPrice: 40 },
  //   ];

  const { cartItems } = useContext(CartContext);

  const [cart, setCart] = useState(cartItems);
  const [address, setAddress] = useState("IIT Bhilai Kutelabhata,49001");

  console.log("This is cart", cart);

  const updateQuantity = (itemIndex, newQuantity) => {
    const updatedCart = cart.map((item, index) => {
      if (index === itemIndex) {
        return { ...item, itemQuantity: Math.max(0, newQuantity) };
      }
      return item;
    });
    setCart(updatedCart);
  };

  async function handlePlaceOrder() {
    console.log("carts from here", cart);
    console.log(cart.length);

    const result = await axios.post(
      "http://localhost:5000/user/add-live-orders",
      cart,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Data ", result);
  }

  const calculateTotal = () => {
    let totalPrice = cart.reduce(
      (total, item) => total + item.itemPrice * item.itemQuantity,
      0
    );
    totalPrice = totalPrice.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    let t1 = 0.1 * totalPrice;
    let taxes = t1.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    let g1 = 0.05 * totalPrice;
    let gst = g1.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    let deliveryCharges = 5;
    let finalPrice =
      Number(totalPrice) + Number(gst) + Number(taxes) + deliveryCharges;
    // let finalPrice = f1.toFixed(2);
    return {
      totalPrice,
      taxes,
      gst,
      deliveryCharges,
      finalPrice,
    };
  };

  const { totalPrice, taxes, gst, deliveryCharges, finalPrice } =
    calculateTotal();

  return (
    <>
      <Navbar cartNumber={cart.length} />
      <div className="container mx-auto mt-8 p-8 border rounded-md border-gray-300 shadow-2xl max-w-5xl">
        <div className="flex">
          <div className="w-3/4 pr-8">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between mb-4 ${
                  index !== cart.length - 1
                    ? "border-b border-gray-300 pb-4"
                    : ""
                }`}
              >
                <div className="flex items-center">
                  <img
                    src="/foodiee.png"
                    alt={item.itemName}
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <p className="font-bold">{item.itemName}</p>
                    <p className="text-gray-500">₹{item.itemPrice}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(index, item.itemQuantity - 1)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.itemQuantity}</span>
                  <button
                    onClick={() => updateQuantity(index, item.itemQuantity + 1)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    +
                  </button>
                  <p className="font-bold ml-4">
                    ₹{item.itemPrice * item.itemQuantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 border-l border-gray-300 pl-8">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="mb-4">
              <p>Subtotal: ₹{totalPrice}</p>
              <p>Taxes: ₹{taxes}</p>
              <p>GST: ₹{gst}</p>
              <p>Delivery Charges: ₹{deliveryCharges}</p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <p className="font-bold text-xl">Total: ₹{finalPrice}</p>
              {/* <p className="font-bold text-xl">Total: ₹100</p> */}
            </div>
            <div className="mt-4">
              <p className="mb-2 font-bold">Delivery Address:</p>
              <p>{address}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Change Address
              </button>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
