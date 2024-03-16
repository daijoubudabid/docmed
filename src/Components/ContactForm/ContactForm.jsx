import { AiOutlineHome } from "react-icons/ai";
import { TfiEmail, TfiTablet } from "react-icons/tfi";

import "./ContactForm.scss";

export const ContactForm = () => {
  return (
    <div className="container mt-5 mt-lg-0">
      <div className="row">
        <div className="col-xl-12">
          <h2 className="contact-title">Get In Touch</h2>
        </div>
        <div className="col-xl-8">
          <form action="" className="contact-form">
            <div className="row">
              <div className="col-xl-12">
                <textarea
                  className="w-100 contact-textarea"
                  name="message"
                  cols="30"
                  rows="9"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="col-sm-6">
                <input
                  className="w-100"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-sm-6">
                <input
                  className="w-100"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-xl-12">
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-100"
                />
              </div>
              <div>
                <button type="submit" className="contact-btn">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3 offset-xl-1 contact-media-info">
          <div className="d-flex gap-3">
            <div>
              <AiOutlineHome size={30} color="#8F9195" />
            </div>
            <div>
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="d-flex gap-3 mt-4">
            <div>
              <TfiTablet size={30} color="#8F9195" />
            </div>
            <div>
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="d-flex gap-3 mt-4">
            <div>
              <TfiEmail size={30} color="#8F9195" />
            </div>
            <div>
              <h3>support@docmed.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
