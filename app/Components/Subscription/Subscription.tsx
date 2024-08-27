import React, { useState } from "react";
import "./Subscription.css";
import Image from "next/image";
const Subscription: React.FC = () => {
  type objData = {
    name: string;
    email: string;
    phone: string;
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email checking regular expn
  const regex = /^\d{10}$/;

  const [data, setData] = useState<objData>({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    //checking the email is valid or not

    if (name === "email" && !emailRegex.test(value)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data.name === "" || data.email === "") {
      setError("Fields must not be empty");
    } else {
      setError("");
      alert("Subscribed");
    }
  };

  //validation for phone number

  const phoneSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data.phone === "") {
      setPhoneError("Field is Empty");
    } else if (!regex.test(data.phone)) {
      setPhoneError("Should include 10 numbers");
    } else {
      setError("");
      alert("Link sent");
    }
  };

  return (
    <>
      <div className="promo">
        <div className="promo-left">
          <h6>Subscribe here for exclusive offers and updates!</h6>
          <form action="" id="myForm">
            <div className="promo-input">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input1"
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input2"
                onChange={handleChange}
              />
            </div>
            <span id="nameError" className="error1">
              {error}
            </span>
            <p className="promo-d">
              Don&apos;t miss out! enter your email and your name, then hit
              subscribe to unlock a world of special offers and details.
            </p>
            <p className="promo-m">
              Please select the ways you would like to hear from Diamondlease,
              and confirm that you&apos;re happy for us to store your data in
              line with our Privacy Policy.
            </p>
            <button onClick={handleSubmit}>Subscribe</button>
          </form>
        </div>
        <div className="promo-right">
          <div className="promo-img">
            <Image src="icons/phone.svg" alt="" height={417} width={231} />
          </div>
          <div className="promo-text">
            <p>
              Enter your number and receive&nbsp; a direct link to download the
              app
            </p>
            <form id="form2">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                onChange={handleChange}
              />
              <span id="phoneError" className="error3">
                {phoneError}
              </span>
              <button type="submit" onClick={phoneSubmit}>
                Get the link
              </button>
            </form>

            <span>Get in on</span>
            <div className="promor-img">
              <a href="apps.apple.com">
                <Image src="icons/app_tr.svg" alt="" width={103} height={30} />
              </a>
              <a href="https://play.google.com/store">
                <Image src="icons/play_tr.svg" alt="" width={103} height={30} />
              </a>
            </div>
          </div>
          <div className="promo-text-m">
            <span>Get in on</span>
            <div className="promor-img">
              <a href="apps.apple.com">
                <Image src="icons/app_tr.svg" alt="" width={103} height={30} />
              </a>
              <a href="https://play.google.com/store">
                <Image src="icons/play_tr.svg" alt="" width={103} height={30} />
              </a>
            </div>
            <p>
              Enter your number and receive&nbsp; a direct link to download the
              app
            </p>
            <div>
              <input type="tel" name="phone" placeholder="Enter Phone Number" />
              <button onSubmit={phoneSubmit}>Get the link</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subscription;
