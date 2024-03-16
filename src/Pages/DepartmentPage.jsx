import { CustomBreadCrumb } from "../Components/BreadCrumb/BreadCrumb";
import "../Components/BreadCrumb/BreadCrumb.scss";
import { Departments } from "../Components/Departments/Departments";
import FooterBanner from "../Components/FooterBanner/FooterBanner";
import { Services } from "../Components/Services/Services";
import { NavTabs } from "../Components/Tabs/NavTabs";
import { Testimonials } from "../Components/Testimonials/Testimonials";

export const DepartmentPage = () => {
  const breadcrumbItems = [
    { text: "Home", href: "#" },
    { text: "Services", href: "#" },
  ];
  return (
    <div>
      <div className="banner-two breadCrumb-overlay">
        <CustomBreadCrumb title="Services" items={breadcrumbItems} />
      </div>
      <Services/>
      <Departments/>
      <Testimonials/>
      <NavTabs/>
      <FooterBanner/>
    </div>
  );
};
