import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "../../style/carousel/carousel.scss"



const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
    return (
      <div className="custom-button-group">
       
        <button className="arrow-left" onClick={() => previous()}><ArrowBackIosNewRoundedIcon /></button>
        <button className="arrow-right" onClick={() => next()}><ArrowForwardIosRoundedIcon /></button>
      </div>
    );
  };

  export default CustomButtonGroup