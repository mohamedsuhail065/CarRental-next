import "./PopularCars.css";

const PopularCars: React.FC = () => {
  return (
    <>
      <div className="popularcars">
        <p>Most popular cars</p>
        <div className="cars">
          <div className="mitsubishi">
            <img src="/images/car_1.jpg" />
            <div className="mits-text">
              <h5>Mitsubishi Eclipse</h5>
              <p className="p1">
                Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV
                mobility with signature Mitsubishi styling, technology and
                driving confidence.
              </p>
              <p className="mob-p1">
                With its aerodynamic curves and bold lines, this car is a
                standout on the road...
              </p>
              <img
                src="/icons/features.svg"
                alt=""
                className="features-d1"
              />
              <img src="/icons/features_m.svg" className="features-m1" />
              <div className="mits-button">
                <h6>AED 2700/ Monthly</h6>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="jac">
            <img src="/images/car_2.jpg" />
            <div className="jac-text">
              <h5>Jac J7</h5>
              <p className="p2">
                S3 Plus has been rated Five-Star in C-NCAP including front
                impact, side impact, frontal side impact & Whipping test.
              </p>
              <p className="mob-p1">
                With its aerodynamic curves and bold lines, this car is a
                standout on the road...
              </p>
              <img
                src="/icons/features.svg"
                alt=""
                className="features-d2"
              />
              <img
                src="/icons/features-m2.svg"
                alt=""
                className="features-m2"
              />
              <div className="mits-button">
                <h6>AED 2700/ Monthly</h6>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCars;
