import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";
import { SliderBg } from "./SliderBg";

export const Slider = () => {
  return (
    <div className="slider-section">
      <Carousel indicators={false}>
        <Carousel.Item interval={4000} className="carousel-item">
          <SliderBg variant="2" />
        </Carousel.Item>
        <Carousel.Item interval={4000} className="carousel-item">
          <SliderBg variant="1" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
