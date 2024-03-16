/* eslint-disable react/no-unescaped-entities */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import card_1 from "../../assets/04_1.png";
import card_3 from "../../assets/05_3.png";
import card_2 from "../../assets/06_2.png";
import card_4 from "../../assets/07_4.png";
import card_6 from "../../assets/09_6.png";
import card_5 from "../../assets/10_5.png";
import "./Departments.scss";

const departmentData = [
  {
    title: "Eye Care",
    text: "Expert care for your eyes: Quality vision services.",
    imageSrc: card_1,
  },
  {
    title: "Physical Therapy",
    text: "Revive, recover, thrive with expert physical therapy.",
    imageSrc: card_2,
  },
  {
    title: "Dental Care",
    text: "Smile brighter with our top-notch dental care.",
    imageSrc: card_3,
  },
  {
    title: "Diagnostic Test",
    text: "Accurate diagnosis with state-of-the-art tests.",
    imageSrc: card_4,
  },
  {
    title: "Skin Surgery",
    text: "Enhance your skin with expert surgical care.",
    imageSrc: card_5,
  },
  {
    title: "Surgery Service",
    text: "Experience excellence in our comprehensive surgery services.",
    imageSrc: card_6,
  },
];

export const Departments = () => {
  return (
    <div className="main-card">
      <div className="container">
        <div className="text-center department-title">
          <h3>Our Departments</h3>
          <p>
            Esteem spirit temper too say adieus who direct esteem.
            <br />
            It esteems luckily or picture placing drawing.
          </p>
        </div>
        <Row>
          {departmentData.map((department, index) => (
            <Col md={6} sm={12} lg={4} key={index}>
              <Card className="department-card border-0">
                <div className="image-container">
                  <Card.Img
                    className="zoom-image"
                    variant="top"
                    src={department.imageSrc}
                    loading="lazy"
                  />
                </div>
                <Card.Body className="card-body">
                  <Card.Title className="card-title">
                    {department.title}
                  </Card.Title>
                  <Card.Text className="card-text">{department.text}</Card.Text>
                  <button className="learn-btn">Learn More</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
