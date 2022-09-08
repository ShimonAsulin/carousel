import data from "../data";
import Card from "./Card";
import "../style/card/card.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const cardData = data.map((element, index) => {
  const { img, price, exclusive } = element;
  return <Card key={index} img={img} price={price} exclusive={exclusive} />;
});
// const CustomDot = ({ onMove, index, onClick, active }) => {
//   // onMove means if dragging or swiping in progress.
//   // active is provided by this lib for checking if the item is active or not.
//   return (
//     <>
//     <li
//       className={active ? "active" : "inactive"}
//       onClick={() => onClick()}
//     >
//     </li>
//       <div className="dot"></div>
//       </>
//   );
// };

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
        // customDot={<CustomDot />}
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
              max: 500,
              min: 0,
            },
            items: 1,
          },
          mobilesm: {
            breakpoint: {
              max: 700,
              min: 500,
            },
            items: 2,
          },
          mobilemd: {
            breakpoint: {
              max: 990,
              min: 700,
            },
            items: 3,
          },
          mobilelg: {
            breakpoint: {
              max: 1200,
              min: 990,
            },
            items: 4,
          },
          mobilexl: {
            breakpoint: {
              max: 1400,
              min: 1200,
            },
            items: 5,
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
