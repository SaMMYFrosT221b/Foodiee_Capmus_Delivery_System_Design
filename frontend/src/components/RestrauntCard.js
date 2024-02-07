import React from "react";
import { useNavigate } from "react-router-dom";

function RestaurantCard({
  title,
  rating,
  deliveryTime,
  cuisine,
  location,
  imageSrc,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/foodiee-home/items");
  };
  return (
    <>
      <div
        className="cursor-pointer max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mt-10 md:w-1/3 px-4 transition-transform transform hover:scale-105"
        onClick={handleClick}
      >
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt="Restaurant"
        />

        <div className="px-6 py-4">
          <div className="mb-2">
            <span className="font-bold text-xl">{title}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-gray-700 font-bold">Rating:</span>
            <span className="ml-2 text-gray-700 font-bold">{rating} ⭐</span>
            <span className="ml-2 text-gray-500 font-bold">•</span>
            <span className="ml-2 text-gray-700 font-bold">Delivery Time:</span>
            <span className="ml-2 text-gray-700">{deliveryTime} mins</span>
          </div>

          <div className="mb-2">
            <span className="text-gray-600">{cuisine}</span>
          </div>

          <div>
            <span className="text-gray-600">{location}</span>
          </div>
          <button>Click</button>
        </div>
      </div>
    </>
  );
}

function RestaurantList() {
  const restaurants = [
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/1.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/2.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/3.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/4.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/1.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/3.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/2.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/1.jpg",
    },
    {
      title: "California Burrito",
      rating: "4.5",
      deliveryTime: "30",
      cuisine: "Italian, Asian, Mexican, American, Salads, Continental..",
      location: "Hyderabad",
      imageSrc: "/4.jpg",
    },
  ];

  return (
    <>
      <p className="text-3xl font-bold mx-[30px]">Restaurants Near me</p>
      <div className="flex flex-wrap -mx-4 mb-40">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </>
  );
}

export default RestaurantList;
