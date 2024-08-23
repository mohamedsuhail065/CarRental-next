"use client";
import { useState } from "react";
import "./Header_M.css";
import Image from "next/image";

const HeaderMobile: React.FC = () => {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [input, setInput] = useState<"inputs1" | "inputs2" | null>(null);

  const toggleButton = () => {
    setIsInput((prev) => !prev);
    if (!isInput) {
      setInput("inputs1");
      console.log(input); // Show the first input section by default
    }
  };

  const showInputs = (id: "inputs1" | "inputs2") => {
    setInput(id);
  };

  return (
    <>
      <div className="res-buttons">
        <button className="b1" onClick={toggleButton}>
          Book a Car
        </button>
        <button className="b2">Quick Book</button>
      </div>
      {isInput && (
        <div className="mobile-inputs">
          <div className="input-nav">
            <ul>
              <li onClick={() => showInputs("inputs1")}>Same as Pick-Up</li>
              <li onClick={() => showInputs("inputs2")}>Different Drop Off</li>
              <li>
                <select className="mob-vehicle-select">
                  <option value="type">Vehicle Type</option>
                  <option value="car">CAR</option>
                  <option value="bike">Bike</option>
                </select>
              </li>
            </ul>
          </div>

          {input === "inputs1" && (
            <div className="inputs">
              <Image src="./icons/re_map.svg" className="red_cal" alt="Map" />
              <input type="text" placeholder="Pick-Up Location" />
              <Image
                src="./icons/red_calender.svg"
                alt="Calendar"
                className="red_cal"
              />
              <input className="date-ico" type="datetime-local" />
              <Image
                src="./icons/red_calender.svg"
                alt="Calendar"
                className="red_cal"
              />
              <input className="date-ico" type="datetime-local" />
              <button className="b3">Search</button>
            </div>
          )}

          {input === "inputs2" && (
            <div className="inputs">
              <Image src="./icons/re_map.svg" className="red_cal" alt="Map" />
              <input
                className="loc-ico"
                type="text"
                placeholder="Pick-Up Location"
              />
              <Image src="./icons/re_map.svg" className="red_cal" alt="Map" />
              <input
                className="loc-ico"
                type="text"
                placeholder="Drop-Off Location"
              />
              <Image
                src="./icons/red_calender.svg"
                alt="Calendar"
                className="red_cal"
              />
              <input className="date-ico" type="datetime-local" />
              <Image
                src="./icons/red_calender.svg"
                alt="Calendar"
                className="red_cal"
              />
              <input className="date-ico" type="datetime-local" />
              <button className="b3">Search</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
