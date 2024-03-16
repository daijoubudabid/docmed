/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Slider.scss";

export const SliderBg = ({ variant }) => {
  const getClassName = () => {
    switch (variant) {
      case "1":
        return "banner-1";
      case "2":
        return "banner-2";
      default:
        return "";
    }
  };

  return (
    <div className={getClassName()}>
      <div className="container">
        <div className="captions">
          <h3>Health Care</h3>
          <span>For Whole Family</span>
          <p>
            In health care sector, service excellence is the facility of
            <br />
            the hospital as health care service provider to consistently
          </p>
          <Link to={"/services"}>
            <button
              className="banner-btn"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Check Our Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
