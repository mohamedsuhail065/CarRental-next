"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import HeaderMobile from "./Components/Header_M/Header_M";
import Banner from "./Components/Banner/Banner";
import PopularCars from "./Components/PopularCars/PopularCars";
import Subscription from "./Components/Subscription/Subscription";
import Step from "./Components/Steps/Steps";
import Location from "./Components/Location/Location";

export default function Home() {
  const [isMobile, setisMobile] = useState<boolean>(false);
  const handleResize = () => {
    setisMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);
  return (
    <main>
      <Header/>
      {isMobile?<HeaderMobile/>:""}
      <Banner/>
      <PopularCars/>
      <Subscription/>
      <Step/>
      <Location/>
    </main>
  );
}
