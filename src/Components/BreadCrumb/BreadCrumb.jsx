/* eslint-disable react/prop-types */
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./BreadCrumb.scss";

export const CustomBreadCrumb = ({ title, items }) => {
  return (
    <div className="container breadcrumb-container breadCrumb-overlay">
      <h3>{title}</h3>
      <Breadcrumb className="bread-crumb-items">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <Breadcrumb.Item key={index} href={item.href} className="bread-crumb-item">
              {item.text}
            </Breadcrumb.Item>
          ))}
      </Breadcrumb>
    </div>
  );
};
