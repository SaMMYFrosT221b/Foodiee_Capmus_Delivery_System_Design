"use client";

import { Carousel } from "flowbite-react";

function HomeItemCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ml-40 mr-40 mt-20">
      <Carousel slideInterval={2000}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default HomeItemCarousel;
