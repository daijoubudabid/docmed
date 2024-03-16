import { About } from "../Components/About/About";
import { Departments } from "../Components/Departments/Departments";
import { DoctorsSlider } from "../Components/DoctorsSlider/DoctorsSlider";
import { FooterBanner } from "../Components/FooterBanner/FooterBanner";
import { Services } from "../Components/Services/Services";
import { Slider } from "../Components/Slider/Slider";
import { NavTabs } from "../Components/Tabs/NavTabs";
import { Testimonials } from "../Components/Testimonials/Testimonials";

export const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Slider />
      <Services />
      <About />
      <Departments />
      <Testimonials />
      <NavTabs />
      <DoctorsSlider />
      <FooterBanner/>
    </div>
  );
};
