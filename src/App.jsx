import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { DepartmentPage } from "./Pages/DepartmentPage";
import { DoctorsPage } from "./Pages/DoctorsPage";
import { HomePage } from "./Pages/HomePage";
import { Appointment } from "./Components/Appointment/Appointment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<DepartmentPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
