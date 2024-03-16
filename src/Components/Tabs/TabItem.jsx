import business from '../../assets/08_business.png'
import medkit from '../../assets/first-aid-kit.png'

export const TabItem = () => {
  return (
    <div className="tab-item-main container">
      <div className="row tabs-container">
        <div className="col-md-6">
          <div className="tab-info">  
            <div className='tab-info-img'>
              <img src={medkit} alt="" />
            </div>
            <h3>Leading edge care for Your family</h3>
            <p>
              Esteem spirit temper too say adieus who direct esteem. It esteems
              luckily picture placing drawing. Apartments frequently or
              motionless on reasonable projecting expression.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tab-image">
            <img src={business} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
