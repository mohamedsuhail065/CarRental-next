"use client";
import Image from "next/image";
import "./Navbar.css";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  const links = [
    {
      name: "About",
      link: "#",
    },
    { name: "Offers", link: "#" },
    {
      name: "Corporate",
      link: "#",
    },
    {
      name: "Personal",
      link: "#",
    },
    {
      name: "Locations",
      link: "#",
    },
    {
      name: "Contact us",
      link: "#",
    },
  ];
  return (
    <nav className="nav">
      <div className="header-icons">
        <Link href="https://facebook.com">
          <Image src="icons/fb.svg" alt="" width={8.8} height={15.5} />
        </Link>
        <Link href="https://facebook.com">
          <Image src="icons/insta.svg" alt="" width={14} height={15.5} />
        </Link>
        <Link href="https://facebook.com">
          <Image src="icons/x.svg" alt="" width={14} height={15.5} />
        </Link>
        <Link href="https://facebook.com">
          <Image src="icons/linkedin.svg" alt="" width={14} height={15.5} />
        </Link>
      </div>
      <div className="logo-layer">
        <div className="logo">
          <Image src="icons/logo.svg" alt="" width={354} height={52} />
        </div>
        <div className="hmenu">
          <Image
            src="icons/charm_menu-hamburger.svg"
            alt=""
            id="menuButton"
            onClick={toggleSidebar}
            width={24}
            height={24}
          />
        </div>
        <Image
          src="icons/menu.svg"
          className="menu"
          alt=""
          width={24}
          height={24}
        />
        <div className="nav-links">
          <ul>
            {links.map((item) => {
              return (
                <a href={item.link} key={item.name}>
                  <li>{item.name}</li>
                </a>
              );
            })}
            <a href="#">
              <li>
                <Image src="icons/notific.svg" alt="" height={24} width={24} />
              </li>
            </a>
            <li>
              <button id="avatarButton">
                <span id="avatar">J</span>
                <span id="name">John Doe</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={`sidebar ${sidebar ? "active" : ""}`}>
          <Image
            src="icons/menu_close.svg"
            alt=""
            id="menu_close"
            onClick={closeSidebar}
            height={20}
            width={20}
          />
          <ul>
            {links.map((item) => {
              return (
                <a href={item.link} key={item.name}>
                  <li>{item.name}</li>
                </a>
              );
            })}
          </ul>
          <button>Log In/Sign Up</button>
        </div>
      </div>
      <p>
        Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
        Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us on
        Social Media for New Offers
      </p>
    </nav>
  );
};

export default Navbar;
