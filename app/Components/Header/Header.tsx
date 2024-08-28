import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import Image from "next/image";

const Header: React.FC = () => {
  const [input, setInput] = useState<"header-input" | "inputs2">(
    "header-input"
  );

  const showInputs = (id: "header-input" | "inputs2") => {
    setInput(id);
  };
  const dateInput1Ref = useRef<HTMLInputElement>(null);
  const dateInput2Ref = useRef<HTMLInputElement>(null);

  //manual calender picker

  const handleCalImgClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.focus();
      if (typeof inputRef.current.showPicker === "function") {
        inputRef.current.showPicker();
      }
    }
  };

  return (
    <>
      <div className="layer">
        <div className="header">
          <div className="header-nav">
            <ul>
              <li onClick={() => showInputs("header-input")} className={input === "header-input" ? "active-tab" : ""}>
                Same as Pick-Up
              </li>
              <li onClick={() => showInputs("inputs2")} className={input === "inputs2" ? "active-tab" : ""}>Different Drop-Off</li>
              <li>
                <select className="vehicle-select" name="" id="">
                  <option value="car">Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="Bike">Bike</option>
                </select>
              </li>
            </ul>
          </div>
          {input === "header-input" && (
            <div className="header-input">
              <div className="input-wrapper">
                <div className="map-img">
                  <Image src="icons/re_map.svg" alt="" width={9} height={12} />
                </div>
                <div className="arrow">
                  <Image
                    src="icons/arrow_red.svg"
                    alt=""
                    width={9}
                    height={12}
                  />
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
                    name="appointment"
                    min="2024-08-15T08:00"
                    max="2024-08-30T17:00"
                    ref={dateInput1Ref}
                  />
                  <div
                    className="cal-img"
                    onClick={() => handleCalImgClick(dateInput1Ref)}
                  >
                    <Image
                      src="icons/red_calender.svg"
                      alt="Calendar"
                      width={9}
                      height={12}
                    />
                  </div>
                </div>

                <div className="cal-wrapper">
                  <input
                    type="datetime-local"
                    id="appointment2"
                    name="appointment"
                    min="2024-08-15T08:00"
                    max="2024-10-15T17:00"
                    ref={dateInput2Ref}
                  />
                  <div
                    className="cal-img"
                    onClick={() => handleCalImgClick(dateInput2Ref)}
                  >
                    <Image
                      src="icons/red_calender.svg"
                      alt="Calendar"
                      width={9}
                      height={12}
                    />
                  </div>
                </div>
              </div>
              <Image src="icons/search.svg" alt="" width={64} height={42} />
              <div className="line"></div>
              <button>Quick Book</button>
            </div>
          )}
          {input === "inputs2" && (
            <div className="inputsd">
              <select className="custom-select">
                <option value="alquoz">Al Quoz</option>
                <option value="dubai">Dubai</option>
              </select>
              <select className="custom-select">
                <option value="alquoz">Al Quoz</option>
                <option value="dubai">Dubai</option>
              </select>
              <div className="cal-container">
                <div className="cal-wrapper">
                  <input
                    type="datetime-local"
                    id="appointment1"
                    name="appointment"
                    min="2024-08-15T08:00"
                    max="2024-08-30T17:00"
                    ref={dateInput1Ref}
                  />
                  <div
                    className="cal-img"
                    onClick={() => handleCalImgClick(dateInput1Ref)}
                  >
                    <Image
                      src="icons/red_calender.svg"
                      alt="Calendar"
                      width={9}
                      height={12}
                    />
                  </div>
                </div>
              </div>
              <Image src="icons/search.svg" alt="" width={64} height={42} />
              <div className="line"></div>
              <button>Quick Book</button>
            </div>
          )}
          <div className="header-icon">
            <p>Download our App for easy accessibility anytime, anywhere!</p>
            <div>
              <a href="https://play.google.com/store">
                <Image src="icons/app.svg" alt="" width={109} height={32} />
              </a>
              <a href="apps.apple.com">
                <Image src="icons/play.svg" alt="" width={109} height={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="icons-right">
          <a href="tel: 9746381958">
            <Image src="icons/r_phone.svg" alt="" width={48} height={45} />
          </a>
          <Image
            src="icons/24x7.svg"
            alt=""
            className="twenty_four"
            width={48}
            height={45}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
