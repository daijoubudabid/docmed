import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { tns } from "tiny-slider";
import doctor_4 from "../../assets/11_3.png";
import doctor_2 from "../../assets/12_2.png";
import doctor_1 from "../../assets/13_1.png";
import doctor_3 from "../../assets/16_4.png";
import "./DoctorsSlider.scss";

const doctorsData = [
  {
    name: "Dr. James Wilson",
    specialization: "Neurologist",
    image: doctor_1,
  },
  {
    name: "Dr. William Anderson",
    specialization: "Cardiologist",
    image: doctor_2,
  },
  {
    name: "Dr. Michael Johnson",
    specialization: "Orthopedic Surgeon",
    image: doctor_3,
  },
  {
    name: "Dr. David Patel",
    specialization: "Pediatrician",
    image: doctor_4,
  },
  {
    name: "Dr. William Anderson",
    specialization: "Cardiologist",
    image: doctor_2,
  },
];

export const DoctorsSlider = () => {
  useEffect(() => {
    let slider = tns({
      container: ".doctors_slider",
      mode: "carousel",
      controls: true,
      controlsContainer: ".buttons",
      nav: false,
      autoplayButtonOutput: false,
      autoplayResetOnVisibility: false,
      items: 4,
      mouseDrag: true,
      swipeAngle: false,
      gutter: 30,
      speed: 700,
      touch: true,
      lazyload: true,
      slideBy: "1",
      autoplay: true,
      responsive: {
        1024: {
          items: 4,
        },

        922: {
          items: 3,
        },
        768: {
          items: 2,
        },
        0: {
          items: 1,
        },
      },
    });
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="my-slider container overflow-hidden ">
      <div className="title d-flex justify-content-between align-items-center">
        <h3>Expert Doctors</h3>
        <div className="buttons">
          <button>
            <BsChevronLeft />
          </button>
          <button>
            <BsChevronRight />
          </button>
        </div>
      </div>
      <div className="doctors_slider">
        {doctorsData.map((doctor, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
};
