import data from "../data";
import Card from "./Card";
import "../style/carousel/carousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from "../asset/Costum-Elements/CostumButtonGroup";
import CustomDot from "../asset/Costum-Elements/CustomDot";

const cardData = data.map((element, index) => {
  const { img, price, exclusive } = element;
  return <Card key={index} img={img} price={price} exclusive={exclusive} />;
});

const Carousela = () => {
  return (
    <div className="carousel-container">
      <Carousel
        customDot={<CustomDot className="dots-container" />}
        showDots
        additionalTransfrom={0}
        arrows={false}
        centerMode={false}
        containerClass="carousel"
        dotListClass="customDot"
        draggable
        infinite
        minimumTouchDrag={80}
        renderDotsOutside
        responsive={{
          mobilexs: {
            breakpoint: {
              max: 580,
              min: 0,
            },
            items: 1,
          },
          mobilesm: {
            breakpoint: {
              max: 850,
              min: 580,
            },
            slidesToSlide: 2,
            items: 2,
          },
          mobilemd: {
            breakpoint: {
              max: 1120,
              min: 850,
            },
            slidesToSlide: 3,
            items: 3,
          },
          mobilelg: {
            breakpoint: {
              max: 1400,
              min: 1120,
            },
            items: 4,
            slidesToSlide: 3,
          },
          mobilexl: {
            breakpoint: {
              max: 3000,
              min: 1400,
            },
            slidesToSlide: 3,
            items: 5,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        partialVisible={false}
        customButtonGroup={<CustomButtonGroup />}
        itemClass="carousel-item-padding-40-px"
        renderButtonGroupOutside={true}
      >
        {cardData}
      </Carousel>
    </div>
  );
};
export default Carousela;
