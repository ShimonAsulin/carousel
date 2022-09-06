// import { useEffect } from "react";
import Card from "./Card";
import data from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/carousel/carousel.scss";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Carousel = () => {
  const cardData = data.map((element, index) => {
    const { img, price, exclusive } = element;

    return <Card key={index} img={img} price={price} exclusive={exclusive} />;
  });

  return <div className="carousel-container">{cardData}</div>;
};

export default Carousel;
