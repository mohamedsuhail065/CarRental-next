import React from "react";
import "./Subscription.css";
import Image from "next/image";
const Subscription: React.FC = () => {
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
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input2"
              />
              <span id="nameError" className="error1"></span>
              <span id="emailError" className="error2"></span>
            </div>
            <p className="promo-d">
              Don&apos;t miss out! enter your email and your name, then hit subscribe
              to unlock a world of special offers and details.
            </p>
            <p className="promo-m">
              Please select the ways you would like to hear from Diamondlease,
              and confirm that you&apos;re happy for us to store your data in line
              with our Privacy Policy.
            </p>
            <button>Subscribe</button>
          </form>
        </div>
        <div className="promo-right">
          <div className="promo-img">
            <Image src="/icons/phone.svg" alt=""/>
          </div>
          <div className="promo-text">
            <p>
              Enter your number and receive&nbsp; a direct link to download the
              app
            </p>
            <form id="form2">
              <input type="tel" name="phone" placeholder="Enter Phone Number" />
              <span id="phoneError" className="error3"></span>
              <button type="submit">Get the link</button>
            </form>

            <span>Get in on</span>
            <div className="promor-img">
              <a href="apps.apple.com">
                <Image src="/icons/app_tr.svg" alt=""/>
              </a>
              <a href="https://play.google.com/store">
                <Image src="/icons/play_tr.svg" alt=""/>
              </a>
            </div>
          </div>
          <div className="promo-text-m">
            <span>Get in on</span>
            <div className="promor-img">
              <a href="apps.apple.com">
                <Image src="/icons/app_tr.svg" alt=""/>
              </a>
              <a href="https://play.google.com/store">
                <Image src="/icons/play_tr.svg" alt=""/>
              </a>
            </div>
            <p>
              Enter your number and receive&nbsp; a direct link to download the
              app
            </p>
            <div>
              <input type="tel" name="phone" placeholder="Enter Phone Number" />
              <button>Get the link</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subscription;
