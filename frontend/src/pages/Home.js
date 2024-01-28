import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import { useContext } from "react";
import { CartContext } from "../App";
import CousineFiltering from "../components/CousineFiltering";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/items");
        setItems(res.data);
        console.log("This is the response form the server", res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNotes();
  }, []);

  // console.log("Items :", items[0].ItemID);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/notes/${id}`);
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (!Token) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, [navigate]);

  const [cartNumber, setCartNumber] = useState(0);
  // const [cartItems, setCartItems] = useState([
  //   { itemName: "Rat", itemQuantity: 1, itemPrice: 10 },
  // ]);

  const { cartItems } = useContext(CartContext);

  function checkItem(itemComponent) {
    let rat = false;
    cartItems.map((item) => {
      if (item.itemName == itemComponent.itemName) {
        rat = true;
      }
    });
    if (rat) {
      return true;
    }
    return false;
  }

  function handleCart(itemComponent) {
    setCartNumber(cartNumber + 1);

    let check = checkItem(itemComponent);
    console.log(check);
    if (!check) {
      cartItems.push(itemComponent);
    } else {
      cartItems.map((item) => {
        if (item.itemName == itemComponent.itemName) {
          item.itemQuantity += 1;
        }
      });
    }
    // if (check) {
    //   cartItems.map((item) => {
    //     if (item.itemName == itemComponent.itemName) {
    //       item.itemQuantity += 1;
    //     }
    //   });
    // } else {
    //   cartItems.push(itemComponent);
    // }

    // const rat = cartItems.map((item) => {
    //   if (item.itemName === itemComponent.itemName) {
    //     console.log("Yes it is present");
    //     item.itemQuantity += 1;
    //     return;
    //   } else {
    //     console.log("NOt presete");
    //   }
    // });
    // cartItems.push(itemComponent);
    // console.log(cartItems);
  }
  return (
    <>
      <Navbar cartNumber={cartNumber} cartItems={cartItems} />
      <div className="Books text-center">
        <h1 className="text-3xl underline m-10">Foodiee Store</h1>
        {/* <button className="btn border p-3 bg-green-400">
          <Link to={"/add"}>Add New Notes</Link>
        </button> */}

        <div className="books flex flex-wrap justify-center">
          {items.map((item) => (
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg ml-5">
              <img
                className="w-full h-48 object-cover"
                // src="restaurant.jpg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVvSh2JtCwvXFCBxz2OhAk__mS34tN8o8DBgXozE0dGg&s"
                alt="Restaurant"
              />
              <div className="px-6 py-4">
                <div className="mb-2">
                  <span className="font-bold text-xl">{item.ItemName} </span>
                  <p>{item.Description}</p>
                  {/* <span className="font-bold text-xl">{item.Description} </span> */}
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-700 font-bold">Rating:</span>
                  <span className="ml-2 text-gray-700 font-bold">4.5 ⭐</span>
                  <span className="ml-2 text-gray-500 font-bold">•</span>
                  <span className="ml-2 text-gray-700 font-bold">
                    Delivery Time:
                  </span>
                  <span className="ml-2 text-gray-700">
                    {item.ExpectedTime}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-gray-600">{item.CousineType}</span>
                </div>

                <div>
                  <span className="text-gray-600 justify-around">
                    Shoping Center{" "}
                    <a
                      className="border p-2 ml-10 cursor-pointer"
                      // onClick={() => setCartNumber(cartNumber + 1)}
                      onClick={() => {
                        const temp = {
                          UserID: localStorage.getItem("UserID"),
                          itemID: item.ItemID,
                          ShopkeeperID: item.ShopkeeperID,
                          OrderStatus: "Pending",
                          itemName: item.ItemName,
                          itemQuantity: 1,
                          itemPrice: item.Price,
                        };
                        handleCart(temp);
                      }}
                    >
                      Add
                    </a>{" "}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div>
        {items.map((item) => {
          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mt-10">
            <img
              className="w-full h-48 object-cover"
              // src="restaurant.jpg"
              src="https://promova.com/content/fast_food_names_d368a9810d.png"
              alt="Restaurant"
            />

            <div className="px-6 py-4">
              <div className="mb-2">
                <span className="font-bold text-xl">{item.ItemName} </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-gray-700 font-bold">Rating:</span>
                <span className="ml-2 text-gray-700 font-bold">4.5 ⭐</span>
                <span className="ml-2 text-gray-500 font-bold">•</span>
                <span className="ml-2 text-gray-700 font-bold">
                  Delivery Time:
                </span>
                <span className="ml-2 text-gray-700">{item.ExpectedTime}</span>
              </div>

              <div className="mb-2">
                <span className="text-gray-600">{item.CousineType}</span>
              </div>

              <div>
                <span className="text-gray-600">Rat Center </span>
              </div>
            </div>
          </div>;
        })}
      </div> */}
        <CousineFiltering />
        <AppDownload />
        <Footer />
      </div>
    </>
  );
};

export default Home;
