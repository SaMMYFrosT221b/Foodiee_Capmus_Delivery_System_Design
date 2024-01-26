import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../App.css";

const Items = () => {
  const { authToken } = useParams();
  console.log("This is the rat AuthToken:", authToken);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/items");
        setItems(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
  }, []);

  const handleLogOut = () => {
    console.log(
      "This is the token from localStorage : ",
      localStorage.getItem("Token")
    );
    localStorage.removeItem("Token");
    navigate("/user");
    console.log(
      "This is the token from localStorage : ",
      localStorage.getItem("Token")
    );
    // window.location.href = "http://localhost:3000/login";
  };

  React.useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (!Token) {
      navigate("/user");
      // window.location.href = "http://localhost:3000/login";
    } else {
      navigate("/items");
    }
  }, [navigate]);

  return (
    <div className="Books text-center">
      <h1 className="text-3xl underline m-10">User Foods Store</h1>
      <button
        className="text-2xl border p-3 text-red-500"
        onClick={handleLogOut}
      >
        {" "}
        Logout{" "}
      </button>
      <div className="books flex flex-wrap justify-center ">
        {items.map((item) => (
          <div className="book  m-5 w-[200px] border p-5" key={item.id}>
            <h3 className="m-2 text-blue-500">{item.ItemName}</h3>
            <p className="m-2 text-green-500">{item.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
