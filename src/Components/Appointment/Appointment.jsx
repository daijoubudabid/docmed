/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";
import "./Appointment.scss";

export const Appointment = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="overflow-hidden"
    >
      <Modal.Body>
        <div className="appointment-container">
          <h2 className="appointment-title">Make an Appointment</h2>
          <form action="" className="appointment-form">
            <div className="row">
              <div className="col-6">
                <input type="time" defaultValue={"12:00"} />
              </div>
              <div className="col-6">
                <input type="date" defaultValue={"2023-12-31"} />
              </div>
              <div className="col-6">
                <select name="select" id="">
                  <option value="" selected>
                    Select Department
                  </option>
                  <option>Eye Care</option>
                  <option>Physical Therapy</option>
                  <option>Dental Care</option>
                </select>
              </div>
              <div className="col-6">
                <select name="select" id="">
                  <option value="" selected>
                    Select Doctor
                  </option>
                  <option>William Anderson</option>
                  <option>James Wilson</option>
                  <option>Olivia Anderson</option>
                </select>
              </div>
              <div className="col-6">
                <input type="text" placeholder="Name" />
              </div>
              <div className="col-6">
                <input type="text" inputMode="numeric" placeholder="Phone no." />
              </div>
              <div className="col-12">
                <input type="email" className="w-100" placeholder="Email" />
              </div>
            </div>
            <div className="col-12">
              <button className="w-100 appointment-btn">Confirm</button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
