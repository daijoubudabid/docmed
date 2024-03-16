import { Col, Row } from "react-bootstrap";
import "./FooterBanner.scss";

export const FooterBanner = () => {
  const colCommonClasses =
    "emergency d-flex justify-content-md-center justify-content-lg-center align-items-lg-center align-items-md-center overlay";
  const gapClasses = "gap-0 gap-sm-0 gap-md-5 gap-lg-5";
  const btnTextClasses = "text-nowrap";

  return (
    <div className="container-fluid main-f-banner">
      <Row>
        {/* Emergency Contact Section */}
        <Col
          xs={12}
          xl={6}
          className={`${colCommonClasses} f-banner-1 ${gapClasses}`}
        >
          <div className="info">
            <h3>For Any Emergency Contact</h3>
            <p>Esteem spirit temper too say adieus.</p>
          </div>
          <div className="info-btn">
            <button className={btnTextClasses}>+10 378 4673 467</button>
          </div>
        </Col>

        {/* Online Appointment Section */}
        <Col xl={6} className={`${colCommonClasses} f-banner-2 ${gapClasses}`}>
          <div className="info">
            <h3>Make An Online Appointment</h3>
            <p>Esteem spirit temper too say adieus.</p>
          </div>
          <div className="info-btn">
            <button>Make An Appointment</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FooterBanner;
