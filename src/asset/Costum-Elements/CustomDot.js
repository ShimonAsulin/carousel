const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState;
    return (
        <button
          className={active ? "dot-active" : "dot-inactive"}
          onClick={() => onClick()}
        />
    );
  };
  export default CustomDot