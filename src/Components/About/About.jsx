import { AiOutlineCheckCircle } from "react-icons/ai";
import about_1 from '../../assets/about.png';
import "./About.scss";

export const About = () => {
  return (
    <div className="container about-main">
      <div className="row">
        <div className="col-lg-7 image-area">
          <div className="img">
            <img src={about_1} className="mb-5"/>
          </div>
        </div>
        <div className="col-lg-5 text-area">
          <h2>Welcome To Docmed</h2>
          <h3>
            Best Care For Your
            <br />
            Good Health
          </h3>
          <span>
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily or picture placing drawing. Apartments frequently or
            motionless on reasonable projecting expression.
          </span>
          <div className="mt-4 lower-text">
          <p>
            <AiOutlineCheckCircle className="me-2" size={20} color="#5DB2FF" />
            Apartments frequently or motionless.
          </p>
          <p>
            <AiOutlineCheckCircle className="me-2" size={20} color="#5DB2FF" />
            Duis aute irure dolor in reprehenderit in voluptate.
          </p>
          <p>
            <AiOutlineCheckCircle className="me-2" size={20} color="#5DB2FF" />
            Voluptatem quia voluptas sit aspernatur.
          </p>
          </div>
          <button id="learn-btn" className="learn-btn mt-4">Learn More</button>
        </div>
      </div>
    </div>
  );
};
