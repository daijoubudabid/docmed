import ecg from '../../assets/heart.png'
import call from '../../assets/emergency-call.png';
import first_aid from '../../assets/first-aid-kit.png';
import "./Services.css";

export const Services = () => {
  return (
    <div className="service-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4 service px-4">
            <img src={ecg} width={50} alt="" />
            <h3>Hospitality</h3>
            <p>Clinical excellence must be the priority for any health care service provider.</p>
            <button className='service-btn'>Apply For A Bed</button>
          </div>
          <div className="col-md-4 service-2 px-4">
            <img src={call} width={50} alt="" />
            <h3>Emergency Care</h3>
            <p>Clinical excellence must be the priority for any health care service provider.</p>
            <button className='service-btn'>+10 672 356 3567</button>
          </div>
          <div className="col-md-4 service px-4">
            <img src={first_aid} width={50} alt="" />
            <h3 className='text-nowrap '>Chamber Service</h3>
            <p>Clinical excellence must be the priority for any health care service provider.</p>
            <button className='service-btn text-nowrap '>Make An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};
