"use client";

import { Carousel } from "flowbite-react";

function HomeItemCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ml-40 mr-40 mt-20">
      <Carousel slideInterval={1000}>
        <img src="/home-item-image-1.jpg" alt="home-item-image-1" />
        <img src="/home-item-image-2.jpg" alt="home-item-image-2" />
        <img src="/home-item-image-3.jpg" alt="home-item-image-3" />
        <img src="/home-item-image-2.jpg" alt="home-item-image-2" />
        <img src="/home-item-image-1.jpg" alt="home-item-image-1" />
      </Carousel>
    </div>
  );
}

export default HomeItemCarousel;
