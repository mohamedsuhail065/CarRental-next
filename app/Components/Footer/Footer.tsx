import React from "react";
import "./Footer.css";
import Image from "next/image";

const Footer: React.FC = () => {
  const ftr = [
    ["Home", "Offers", "FAQ", "Career"],
    ["About Us", "Locations", "Privacy Policy", "Terms & Conditions"],
    ["Services", "Contact Us", "Service Request"],
    ["Al Habtoor Companies"],
    [
      "Hospitality",
      "Real Estate",
      "Education",
      "Publishing",
      "Automotive",
      "Vehicle Leasing",
    ],
  ];
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-up">
            <div className="footer-left">
              <Image src="icons/logo_f.svg" alt="" width={56} height={66} />
              <p>Member of the Al Habtoor Group</p>
            </div>
            <div className="footer-center">
              <div>
                {ftr.map((items, index) => {
                  return (
                    <ul key={index}>
                      {items.map((item, subIndex) => {
                        return <li key={subIndex}>{item}</li>;
                      })}
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="footer-right">
              <p>FOLLOW US ON</p>
              <div className="f-icons">
                <Image
                  src="icons/fb_f.svg"
                  alt=""
                  width={16.59}
                  height={16.59}
                />
                <Image
                  src="icons/x_f.svg"
                  alt=""
                  width={16.59}
                  height={16.59}
                />
                <Image
                  src="icons/insta_f.svg"
                  alt=""
                  width={16.59}
                  height={16.59}
                />
                <Image
                  src="icons/ln_f.svg"
                  alt=""
                  width={16.59}
                  height={16.59}
                />
                <Image
                  src="icons/yt_f.svg"
                  alt=""
                  width={16.59}
                  height={16.59}
                />
              </div>
              <Image src="icons/f_sign.svg" alt="" width={64} height={24} />
            </div>
          </div>
          <div className="f-line"></div>
          <div className="cr">© 2018 Car rental LLC - All Rights Reserved.</div>
        </div>
        <div className="footer-m">
          <div className="footer-top">
            <div className="ft-1">
              <Image
                src="icons/footer_logo-m.svg"
                className="ft-logo"
                alt=""
                width={113}
                height={46}
              />
              <Image
                src="icons/ft-social.svg"
                alt=""
                className="ft-social"
                width={141}
                height={26}
              />
            </div>
            <div className="ft-2">
              <ul>
                <li>Home</li>
                <li>Offers</li>
                <li>Career</li>
                <li>About Us</li>
                <li>Locations</li>
              </ul>
            </div>
            <div className="ft-3">
              <ul>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Service Request</li>
              </ul>
            </div>
            <div className="ft-4">
              <ul>
                <li>Privacy Policy</li>
                <li>Services</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footer-down">
            <div className="fd-1">Al Habtoor Companies</div>
            <div className="fd-2">
              <ul>
                <li>Hospitality</li>
                <li>Real Estate</li>
                <li>Publishing</li>
              </ul>
            </div>
            <div className="fd-3">
              <ul>
                <li>Automotive</li>
                <li>Vehicle Leasing</li>
              </ul>
            </div>
            <div className="fd-4">
              <Image src="icons/ft-d-sign.svg" alt="" width={58} height={26} />
            </div>
            <div className="f-line"></div>
            <div className="cr">
              © 2018 Car rental LLC - All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
