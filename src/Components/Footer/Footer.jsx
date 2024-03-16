import { AiOutlineHeart } from "react-icons/ai";
// import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import footerLogo from "../../assets/15_footer_logo.png";
import "./Footer.scss";
import {FaXTwitter} from 'react-icons/fa6'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer-logo">
                <a href="#">
                  <img src={footerLogo} alt="Footer Logo" />
                </a>
                <p>
                  Firmament morning sixth subdue darkness creeping gathered
                  divide.
                </p>
              </div>
              <div className="footer-icons d-flex gap-3">
                <div className="icons">
                  <FaFacebookF className="f-icon" />
                </div>
                <div className="icons">
                  <FaXTwitter className="f-icon" />
                </div>
                <div className="icons">
                  <FaGithub className="f-icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
              <ul className="footer-menu">
                <h3 className="footer-title mt-5 mt-sm-5 mt-md-0 mt-lg-0">
                  Departments
                </h3>
                <li>
                  <a href="#">Eye Care</a>
                </li>
                <li>
                  <a href="#">Skin Care</a>
                </li>
                <li>
                  <a href="#">Pathology</a>
                </li>
                <li>
                  <a href="#">Medicine</a>
                </li>
                <li>
                  <a href="#">Dental</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <ul className="footer-menu">
                <h3 className="footer-title mt-5 mt-sm-5 mt-md-5 mt-lg-0">
                  Useful Links
                </h3>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Appointment</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <ul className="footer-menu">
                <h3 className="footer-title mt-5 mt-sm-5 mt-md-5 mt-lg-0">
                  Address
                </h3>
                <p>
                  200, D-block, Green lane USA
                  <br />
                  +10 367 467 8934
                  <br />
                  docmed@contact.com
                </p>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-center">
        <p>
          Copyright © {currentYear} All rights reserved | This Website is made with <AiOutlineHeart /> by <a href="https://github.com/dabidmarma" target="#_blank">Dabid Marma</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
