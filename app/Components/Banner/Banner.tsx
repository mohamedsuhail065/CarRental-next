import { useEffect, useState } from "react";
import Image from "next/image";
import "./Banner.css";

type Slide = {
  imgSrc: string;
  altText: string;
  content: JSX.Element;
};

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = [
    {
        imgSrc: "/images/banner.jpg",
      altText: "summer_promotion_img",
      content: (
        <>
           <p className="summer_content_para">
          Recieve guarnteed <button className="green_para">GIFT VOUCHER</button><br />
          on a monthly hire or lease
        </p>
        </>
      ),
    },
    {
        imgSrc: "/images/banner.jpg",
      altText: "summer_promotion_img",
      content: (
        <>
           <p className="summer_content_para">
          Recieve guarnteed <button className="green_para">GIFT VOUCHER</button><br />
          on a monthly hire or lease
        </p>
        </>
      ),
    },
    {
        imgSrc: "/images/banner.jpg",
      altText: "summer_promotion_img",
      content: (
        <>
           <p className="summer_content_para">
          Recieve guarnteed <button className="green_para">GIFT VOUCHER</button><br />
          on a monthly hire or lease
        </p>
        </>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <div className="carousel">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="summer_promotion_container">
              <Image
                src={slide.imgSrc}
                alt={slide.altText}
                className="summer_promotion_img"
              />
              <div className="text_container_summer">{slide.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
