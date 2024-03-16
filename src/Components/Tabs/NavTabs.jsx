import { useState } from "react";
import "./NavTabs.scss";
import { TabItem } from "./TabItem";

export const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("Excellent Services");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="main-tab">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav m-0 p-0">
                <li
                  className={`nav-item ${
                    activeTab === "Excellent Services" ? "active" : ""
                  } col-12 col-sm-12 col-md-4`}
                  onClick={() => handleTabClick("Excellent Services")}
                >
                  <a>Excellent Services</a>
                </li>
                <li
                  className={`nav-item ${
                    activeTab === "Qualified Doctors" ? "active" : ""
                  } col-12 col-sm-12 col-md-4`}
                  onClick={() => handleTabClick("Qualified Doctors")}
                >
                  <a>Qualified Doctors</a>
                </li>
                <li
                  className={`nav-item ${
                    activeTab === "Emergency Department" ? "active" : ""
                  } col-12 col-sm-12 col-md-4`}
                  onClick={() => handleTabClick("Emergency Department")}
                >
                  <a>Emergency Department</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {activeTab && <TabItem tab={activeTab} />}
    </>
  );
};
