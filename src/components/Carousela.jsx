import data from "../data";
import Card from "./Card";
import "../style/card/card.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const cardData = data.map((element, index) => {
  const { img, price, exclusive } = element;
  return <Card key={index} img={img} price={price} exclusive={exclusive} />;
});
const dots = {
  color: 'red'
}

const Carousela = () => {
  return (
    <div
      style={{
        paddingBottom: "30px",
        position: "relative",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        containerClass="container"
        dotListClass={dots}
        draggable
        infinite
        itemClass=""
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 800,
            },
            items: 5,
          },
          mobilexs: {
            breakpoint: {
              max: 800,
              min: 800,
            },
            items: 1,
          },
          mobileS: {
            breakpoint: {
              max: 800,
              min: 800,
            },
            items: 2,
          },
          tablet: {
            breakpoint: {
              max: 1400,
              min: 800,
            },
            items: 3,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        showDots
        sliderClass=""
        slidesToSlide={3}
        swipeable
      >
        {cardData}
      </Carousel>
    </div>
  );
};
export default Carousela;
