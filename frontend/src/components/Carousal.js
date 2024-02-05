import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ImageCarousel() {
  return (
    <Carousel
      autoPlay
      className="mt-5 md:mt-10 lg:mt-20 ml-5 md:ml-10 lg:ml-20 mr-5 md:mr-10 lg:mr-20 -z-0"
    >
      <div>
        <img src="https://previews.123rf.com/images/baibakova/baibakova1908/baibakova190800110/129010048-assorted-indian-food-on-black-background-indian-cuisine-top-view-with-copy-space-panorama-banner.jpg" />
      </div>
      <div>
        <img src="https://previews.123rf.com/images/baibakova/baibakova1908/baibakova190800110/129010048-assorted-indian-food-on-black-background-indian-cuisine-top-view-with-copy-space-panorama-banner.jpg" />
      </div>
      <div>
        <img src="https://previews.123rf.com/images/baibakova/baibakova1908/baibakova190800110/129010048-assorted-indian-food-on-black-background-indian-cuisine-top-view-with-copy-space-panorama-banner.jpg" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
