import { CustomBreadCrumb } from "../Components/BreadCrumb/BreadCrumb";
import { Doctors } from "../Components/Doctors/Doctors";
import FooterBanner from "../Components/FooterBanner/FooterBanner";
import { NavTabs } from "../Components/Tabs/NavTabs";
import { Testimonials } from "../Components/Testimonials/Testimonials";

export const DoctorsPage = () => {
  const breadcrumbItems = [
    { text: "Home", href: "#" },
    { text: "Doctors", href: "#" },
  ];
  return (
    <div>
      <div className="banner-one breadCrumb-overlay">
        <CustomBreadCrumb title="Doctors" items={breadcrumbItems} />
      </div>
      <Doctors/>
      <Testimonials/>
      <NavTabs/>
      <FooterBanner/>
    </div>
  );
};
