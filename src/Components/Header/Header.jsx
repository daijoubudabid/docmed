import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/01_logo.png";
import { Appointment } from "../Appointment/Appointment";
import { HeaderDetails } from "../HeaderDetails/HeaderDetails";
import "./Header.scss";

export const Header = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleAppointmentButtonClick = () => {
    setShowAppointmentModal(true);
  };

  const handleCloseAppointmentModal = () => {
    setShowAppointmentModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 300; 
      setIsNavbarFixed(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderDetails />
      <Navbar
        expand="lg"
        className={`py-3 ${isNavbarFixed ? "fixed-top" : ""}`}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto my-4 my-lg-0">
              <Nav.Link href="/" className="me-0 me-lg-3 mb-2 mb-lg-0">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="me-0 me-lg-3 mb-2 mb-lg-0">
                About
              </Nav.Link>
              <Nav.Link href="/services" className="me-0 me-lg-3 mb-2 mb-lg-0">
                Departments
              </Nav.Link>
              <Nav.Link href="/doctors" className="me-0 me-lg-3 mb-2 mb-lg-0">
                Doctors
              </Nav.Link>
              <Nav.Link href="/contact" className="me-0 me-lg-3 mb-2 mb-lg-0">
                Contact
              </Nav.Link>
            </Nav>
            <button
              className="book-btn d-none d-sm-none d-md-none d-lg-block"
              onClick={handleAppointmentButtonClick}
            >
              Make An Appointment
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Appointment
        show={showAppointmentModal}
        handleClose={handleCloseAppointmentModal}
      />
    </>
  );
};
