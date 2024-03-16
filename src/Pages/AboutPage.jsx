import { About } from "../Components/About/About";
import { CustomBreadCrumb } from "../Components/BreadCrumb/BreadCrumb";
import "../Components/BreadCrumb/BreadCrumb.scss";
import { DoctorsSlider } from "../Components/DoctorsSlider/DoctorsSlider";
import { FooterBanner } from "../Components/FooterBanner/FooterBanner";
import { NavTabs } from "../Components/Tabs/NavTabs";
import { Testimonials } from "../Components/Testimonials/Testimonials";

export const AboutPage = () => {
  const breadcrumbItems = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
  ];
  return (
    <div>
      <div className="banner-one breadCrumb-overlay">
        <CustomBreadCrumb title="About Us" items={breadcrumbItems} />
      </div>
      <About />
      <Testimonials />
      <NavTabs />
      <DoctorsSlider />
      <FooterBanner />
    </div>
  );
};
