import { FaQuoteRight } from "react-icons/fa";
import "./Testimonials.scss";

export const TestimonialOne = () => {
  return (
    <div className="bg-one">
      <div className="content-container">
        <div className="text-content">
          <FaQuoteRight className="quote" color="white" size={40} />
          <p>
            Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor
            <br />
            sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices
            nec sed neque.
            <br />
            Fusce ac mattis nulla. Morbi eget ornare dui.
          </p>
          <h3>Asana Korim</h3>
        </div>
      </div>
    </div>
  );
};
