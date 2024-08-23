import React from "react";
import "./Header.css";
import Image from "next/image";

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
                <Image src="./icons/re_map.svg" alt="" width={9} height={12}/>
              </div>
              <div className="arrow">
                <Image src="./icons/arrow_red.svg" alt="" width={9} height={12}/>
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
                  <Image src="./icons/red_calender.svg" alt="Calendar" width={9} height={12}/>
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
                  <Image src="./icons/red_calender.svg" alt="Calendar" width={9} height={12}/>
                </div>
              </div>
            </div>
            <Image src="./icons/search.svg" alt=""  width={64} height={42}/>
            <div className="line"></div>
            <button>Quick Book</button>
          </div>
          <div className="header-icon">
            <p>Download our App for easy accessibility anytime, anywhere!</p>
            <div>
              <a href="https://play.google.com/store">
                <Image src="./icons/app.svg" alt="" width={109} height={32}/>
              </a>
              <a href="apps.apple.com">
                <Image src="./icons/play.svg" alt="" width={109} height={32}/>
              </a>
            </div>
          </div>
        </div>
        <div className="icons-right">
          <a href="tel: 9746381958">
            <Image src="./icons/r_phone.svg" alt="" width={48} height={45}/>
          </a>
          <Image src="./icons/24x7.svg" alt="" className="twenty_four"  width={48} height={45}/>
        </div>
      </div>
    
    </>
  );
};

export default Header;
