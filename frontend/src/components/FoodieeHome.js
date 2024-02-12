import ItemCart from "../components/ItemCard";
import NavbarFromTailWind from "../pages/NavbarFromTailWind";
import AppDownload from "./AppDownload";
import ImageCarousel from "./Carousal";
import FeedbackForm from "./Feedback";
import Filters from "./Filters";
import FooterFromTailWind from "./FooterFromTailwind";
import QuoteHome from "./Quote";
import RestaurantList from "./RestrauntCard";

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FoodieeHome() {
  const [items, setItemsData] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (!Token) {
      navigate("/login");
    } else {
      navigate("/foodiee-home");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/items");
        setItemsData(res.data);
      } catch (error) {
        console.log("This is the error", error);
      }
    };
    fetchAllItems();
  }, []);

  // const itemData = [
  //   {
  //     url: "3d-casual-life-burger-straight.png",
  //     itemName: "Burger",
  //     description: "This is junk food dont eat it.",
  //     price: "50",
  //     expectedTime: "10",
  //     cousineType: "Snacks",
  //   },
  //   {
  //     url: "3d-casual-life-burger-straight.png",
  //     itemName: "Burger",
  //     description: "This is junk food dont eat it.",
  //     price: "50",
  //     expectedTime: "10",
  //     cousineType: "Snacks",
  //   },
  //   {
  //     url: "3d-casual-life-burger-straight.png",
  //     itemName: "Burger",
  //     description: "This is junk food dont eat it.",
  //     price: "50",
  //     expectedTime: "10",
  //     cousineType: "Snacks",
  //   },
  //   {
  //     url: "3d-casual-life-burger-straight.png",
  //     itemName: "Burger",
  //     description: "This is junk food dont eat it.",
  //     price: "50",
  //     expectedTime: "10",
  //     cousineType: "Snacks",
  //   },
  //   {
  //     url: "3d-casual-life-burger-straight.png",
  //     itemName: "Burger",
  //     description: "This is junk food dont eat it.",
  //     price: "50",
  //     expectedTime: "10",
  //     cousineType: "Snacks",
  //   },
  //   {
  //     url: "3d-casual-life-burger-straight.png",
  //     itemName: "Burger",
  //     description: "This is junk food dont eat it.",
  //     price: "50",
  //     expectedTime: "10",
  //     cousineType: "Snacks",
  //   },
  // ];

  const renderListOfUserNames = (itemData) => {
    return itemData.map((item, index) => (
      <ItemCart
        itemID={item.ItemID}
        shopkeeperID={item.ShopkeeperID}
        itemName={item.ItemName}
        description={item.Description}
        price={item.Price}
        expectedTime={item.ExpectedTime}
        cousineType={item.CousineType}
      />
    ));
  };
  return (
    <>
      <NavbarFromTailWind />
      <ImageCarousel />
      <Filters />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
        {renderListOfUserNames(items)}
      </div> */}
      <RestaurantList />
      <QuoteHome />
      {/* <FeedbackForm /> */}
      <AppDownload />
      <FooterFromTailWind />
    </>
  );
}

export default FoodieeHome;
