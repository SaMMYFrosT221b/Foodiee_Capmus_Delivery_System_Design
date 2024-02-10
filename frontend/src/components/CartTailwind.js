import React, { useContext, useEffect, useState } from "react";
import NavbarFromTailWind from "../pages/NavbarFromTailWind";
import FooterFromTailWind from "./FooterFromTailwind";
import { CartContext } from "../App";
import axios from "axios";
import ModalComponent from "../components/Modal/Modal";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    image: "https://example.com/product-image1.jpg",
    name: "Awesome T-Shirt",
    size: "M",
    price: 24.99,
    quantity: 1,
  },
  {
    id: 2,
    image: "https://example.com/product-image2.jpg",
    name: "Cool Cap",
    size: "L",
    price: 19.99,
    quantity: 2,
  },
];

const CartItemTailWind = () => {
  let [total, setTotal] = useState(0);
  const [cartNumber, setCartNumber] = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const user = Number(localStorage.getItem("UserID"));

  useEffect(() => {
    const allItems = async () => {
      const allItemData = await axios.post(
        "http://localhost:5000/cart/get-item-by-user",
        { UserID: user }
      );
      setCartItems(allItemData.data);
      let rat = 0;
      cartItems.map((item) => {
        rat += item.itemQuantity * item.itemPrice;
      });
      setTotal(rat);
    };
    allItems();
  }, [handleAddItem]);

  async function handleAddItem(data) {
    const result = await axios.post(
      "http://localhost:5000/cart/add-to-cart",
      data
    );

    const allItemData = await axios.post(
      "http://localhost:5000/cart/get-item-by-user",
      { UserID: user }
    );
    setCartItems(allItemData.data);
    let rat = 0;
    cartItems.map((item) => {
      rat += item.itemQuantity * item.itemPrice;
    });
    setTotal(rat);
  }

  async function onRemove(data) {
    const result = await axios.post(
      "http://localhost:5000/cart/delete-item-from-cart",
      data
    );

    const allItemData = await axios.post(
      "http://localhost:5000/cart/get-item-by-user",
      { UserID: user }
    );

    setCartItems(allItemData.data);
    setCartNumber(allItemData.data.length);
    let rat = 0;
    cartItems.map((item) => {
      rat += item.itemQuantity * item.itemPrice;
    });
    setTotal(rat);
  }

  async function handleCheckOut() {
    console.log("Handle Checkout Invoked!");
  }

  const renderCartItems = () => {
    if (cartItems.length == 0) {
      return (
        <p className="font-bold text-2xl text-center m-10">
          Cart is <span className="text-green-500">Empty</span>
        </p>
      );
    }
    return cartItems.map((product) => (
      <div
        key={product.itemID}
        className=" justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
      >
        <img
          src="/3d-casual-life-burger-straight.png"
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
              {product.itemName}
            </h2>
            {/* <p className="mt-1 text-xs text-gray-700">{product.itemPrice}</p> */}
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => {
                  handleAddItem({
                    UserID: user,
                    itemID: product.itemID,
                    ShopkeeperID: product.ShopkeeperID,
                    itemName: product.itemName,
                    itemQuantity: 1,
                    itemPrice: product.itemPrice,
                    operator: "-",
                  });
                }}
              >
                -
              </span>
              {/* <input
                className="h-8 w-8 border  text-center text-xs outline-none"
                type="number"
                value={product.itemQuantity}
                min="1"
                // onChange={(e) => onQuantityChange(product.id, e.target.value)}
              /> */}
              <p>{product.itemQuantity}</p>
              <span
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => {
                  handleAddItem({
                    UserID: user,
                    itemID: product.itemID,
                    ShopkeeperID: product.ShopkeeperID,
                    itemName: product.itemName,
                    itemQuantity: 1,
                    itemPrice: product.itemPrice,
                    operator: "+",
                  });
                }}
              >
                +
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{product.itemPrice}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                onClick={() => {
                  onRemove({
                    UserID: user,
                    itemID: Number(product.itemID),
                  });
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <NavbarFromTailWind />
      <div className="flex justify-center items-center flex-wrap m-10">
        <div className="grid gap-6 flex-col justify-center">
          {renderCartItems()}
        </div>
        <div class=" sm:block mt-6 m-10 h-full rounded-lg border bg-white p-6 shadow-md sm:mt-4 sm:m-6 md:mt-0 md:w-1/3 lg:w-1/4">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">₹{total}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">₹49.9</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">₹{total + 49.9} Rupees</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          {/* <button
            class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            onClick={() => {
              handleCheckOut();
            }}
          >
            Check out
          </button> */}
          <ModalComponent
            buttonName={"Check Out"}
            totalAmount={total}
            UserID={user}
            cartItems={cartItems}
          />
        </div>
      </div>
      <FooterFromTailWind />
    </>
  );
};

export default CartItemTailWind;
