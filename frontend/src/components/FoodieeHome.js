import ItemCart from "../components/ItemCard";
import NavbarFromTailWind from "../pages/NavbarFromTailWind";
import AppDownload from "./AppDownload";
import ImageCarousel from "./Carousal";
import Carousal from "./Carousal";
import FeedbackForm from "./Feedback";
import Filters from "./Filters";
import FooterFromTailWind from "./FooterFromTailwind";
import QuoteHome from "./Quote";

import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../App";

function FoodieeHome() {
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

  React.useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (!Token) {
      navigate("/login");
    } else {
      navigate("/foodiee-home");
    }
  }, [navigate]);
  //   const [cartNumber, setCartNumber] = useState(0);

  const { cartNumber } = useContext(CartContext);
  const userNames = ["Jesse", "Tom", "Anna", "Jesse", "Tom", "Anna"];

  const renderListOfUserNames = (names) => {
    return names.map((name) => <ItemCart />);
  };
  return (
    <>
      <NavbarFromTailWind cartNumber={cartNumber} />
      <ImageCarousel />
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
        {renderListOfUserNames(userNames)}
      </div>
      <QuoteHome />
      <FeedbackForm />
      <AppDownload />
      <FooterFromTailWind />
    </>
  );
}

export default FoodieeHome;
