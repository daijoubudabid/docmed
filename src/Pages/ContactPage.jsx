import { CustomBreadCrumb } from "../Components/BreadCrumb/BreadCrumb";
import { ContactForm } from "../Components/ContactForm/ContactForm";
import { GoogleMap } from "../Components/GoogleMap/GoogleMap";

export const ContactPage = () => {
  const breadcrumbItems = [
    { text: "Home", href: "#" },
    { text: "Contact", href: "#" },
  ];
  return (
    <div>
      <div className="banner-two breadCrumb-overlay">
        <CustomBreadCrumb title="Contact" items={breadcrumbItems} />
      </div>
      <GoogleMap/>
      <ContactForm/>
    </div>
  );
};
