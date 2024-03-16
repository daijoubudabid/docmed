import map from "../../assets/map.png";
import "./GoogleMap.scss";

export const GoogleMap = () => {
  return (
    <div className="container map-container d-none d-lg-block">
      <img src={map} alt="map" loading="lazy" />
    </div>
  );
};
