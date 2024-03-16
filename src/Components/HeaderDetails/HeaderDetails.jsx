import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./HeaderDetails.scss";

export const HeaderDetails = () => {
  return (
    <div className="main d-none d-md-block ">
      <div className="d-flex justify-content-between container p-3">
        <div className="d-flex gap-2 align-items-center">
          <div>
            <FaLinkedinIn className="icon1" />
          </div>
          <div>
            <FaFacebookF className="icon2" />
          </div>
          <div>
            <FaGooglePlusG className="icon3" />
          </div>
        </div>
        <div className="d-flex gap-5">
          <div className="d-flex gap-2 align-items-center">
            <HiMail className="right-icon" />
            <span className="text">info@docmed.com</span>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <BsTelephoneFill className="right-icon" />
            <span className="text">160160</span>
          </div>
        </div>
      </div>
    </div>
  );
};
