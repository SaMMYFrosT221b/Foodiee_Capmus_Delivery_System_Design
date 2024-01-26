import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";

const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/items");
        setItems(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNotes();
  }, []);

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
  const [cartItems, setCartItems] = useState([
    { itemName: "Rat", itemQuantity: 1, itemPrice: 10 },
  ]);

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
        <h1 className="text-3xl underline m-10">Sammy Foods Store</h1>
        {/* <div className="books flex flex-wrap justify-center ">
        {items.map((item) => (
          <div className="book  m-5 w-[200px] border p-5" key={item.ItemID}>
            <h3 className="m-2 text-blue-500">{item.ItemName}</h3>
            <p className="m-2 text-green-500">{item.Description}</p>
            <p className="m-2 text-green-500">{item.Price}</p>
            <button
              className="delete m-3 text-red-400 border p-2"
              onClick={() => {
                handleDelete(item.ItemID);
              }}
            >
              Delete
            </button>
            <button className="update text-gray-500 border p-2">
              {" "}
              <Link to={`/update/${item.ItemID}`}>Update</Link>
            </button>
          </div>
        ))}
      </div> */}
        <button className="btn border p-3 bg-green-400">
          <Link to={"/add"}>Add New Notes</Link>
        </button>

        <div className="books flex flex-wrap justify-center ">
          {items.map((item) => (
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mt-10">
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
      </div>
    </>
  );
};

export default Home;
