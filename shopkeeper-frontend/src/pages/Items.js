import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Items = () => {
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
    localStorage.removeItem("Token");
    navigate("/user");
    console.log(
      "This is Token form local Storage:",
      localStorage.getItem("Token")
    );
  };

  React.useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (!Token) {
      navigate("/shopkeeper");
    } else {
      navigate("/items");
    }
  }, [navigate]);

  return (
    <div className="Books text-center">
      <h1 className="text-3xl underline m-10">Shopkeepers Foods Store</h1>
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
