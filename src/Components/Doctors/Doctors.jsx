import { Card, Col, Row } from "react-bootstrap";
import doctor_1 from "../../assets/11_3.png";
import doctor_2 from "../../assets/12_2.png";
import doctor_3 from "../../assets/13_1.png";
import doctor_4 from "../../assets/16_4.png";
import doctor_5 from "../../assets/doctor-5.jpg";
import doctor_6 from "../../assets/doctor-6.jpg";
import doctor_7 from "../../assets/doctor-7.jpg";
import doctor_8 from "../../assets/doctor-8.jpg";

export const Doctors = () => {
  const doctorsData = [
    {
      name: "James Wilson",
      specialization: "Neurologist",
      image: doctor_1,
    },
    {
      name: "William Anderson",
      specialization: "Cardiologist",
      image: doctor_2,
    },
    {
      name: "Michael Johnson",
      specialization: "Orthopedic Surgeon",
      image: doctor_3,
    },
    {
      name: "David Patel",
      specialization: "Pediatrician",
      image: doctor_4,
    },
    {
      name: "Michael Carter",
      specialization: "Psychiatrist",
      image: doctor_5,
    },
    {
      name: "Olivia Anderson",
      specialization: "Obstetrician-Gynecologist",
      image: doctor_6,
    },
    {
      name: "William Foster",
      specialization: "Gastroenterologist",
      image: doctor_7,
    },
    {
      name: "Daniel Rodriguez",
      specialization: "Physician",
      image: doctor_8,
    },
  ];
  return (
    <div className="container doctors">
      <Row>
        {doctorsData.map((doctor, index) => (
          <Col sm={6} md={6} lg={3} key={index}>
            <Card className="doctor-card border-0">
              <div className="doctor-image">
                <Card.Img
                  variant="top"
                  loading="lazy"
                  className="image"
                  src={doctor.image}
                />
              </div>
              <Card.Body className="doctor-info">
                <Card.Title className="doctor-name">{doctor.name}</Card.Title>
                <Card.Text className="doctor-prof">
                  {doctor.specialization}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
