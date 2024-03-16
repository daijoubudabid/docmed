import Carousel from "react-bootstrap/Carousel";
import { TestimonialOne } from "./TestimonialOne";
import { TestimonialTwo } from "./TestimonialTwo";

export const Testimonials = () => {
  return (
    <div className="bg-black testimonials">
      <Carousel indicators={false} controls={true}>
        <Carousel.Item interval={1500}>
          <TestimonialOne />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <TestimonialTwo />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
