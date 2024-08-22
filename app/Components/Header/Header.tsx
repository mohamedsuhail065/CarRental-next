import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      <div className="layer">
        <div className="header">
          <div className="header-nav">
            <ul>
              <li>Same as Pick-Up</li>
              <li>Diffrent Drop-Off</li>
              <li>
                <select className="vehicle-select" name="" id="">
                  <option value="car">Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="Bike">Bike</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="header-input">
            <div className="input-wrapper">
              <div className="map-img">
                <img src="/icons/re_map.svg" />
              </div>
              <div className="arrow">
                <img src="/icons/arrow_red.svg" />
              </div>
              <select className="custom-select">
                <option value="alquoz">Al Quoz</option>
                <option value="dubai">Dubai</option>
              </select>
            </div>
            <div className="cal-container">
              <div className="cal-wrapper">
                <input
                  type="datetime-local"
                  id="appointment1"
                  name="appointmen"
                  min="2024-08-15T08:00"
                  max="2024-08-15T17:00"
                  value="2024-08-15T09:00"
                />
                <div className="cal-img">
                  <img src="/icons/red_calender.svg" alt="Calendar" />
                </div>
              </div>

              <div className="cal-wrapper">
                <input
                  type="datetime-local"
                  id="appointment2"
                  name="appointment"
                  min="2024-08-15T08:00"
                  max="2024-10-15T17:00"
                  value="2024-08-15T09:00"
                />
                <div className="cal-img">
                  <img src="/icons/red_calender.svg" alt="Calendar" />
                </div>
              </div>
            </div>
            <img src="/icons/search.svg" alt="" />
            <div className="line"></div>
            <button>Quick Book</button>
          </div>
          <div className="header-icon">
            <p>Download our App for easy accessibility anytime, anywhere!</p>
            <div>
              <a href="https://play.google.com/store">
                <img src="/icons/app.svg" />
              </a>
              <a href="apps.apple.com">
                <img src="/icons/play.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="icons-right">
          <a href="tel: 9746381958">
            <img src="/icons/r_phone.svg" />
          </a>
          <img src="/icons/24x7.svg" alt="" className="twenty_four" />
        </div>
      </div>
    
    </>
  );
};

export default Header;
