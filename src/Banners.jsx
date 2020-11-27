import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner1 from "./asserts/banners/banner1.jpg";
import banner2 from "./asserts/banners/banner2.jpg";
import banner3 from "./asserts/banners/banner3.jpg";
import banner4 from "./asserts/banners/banner4.jpg";
import "./Navbarscss.css";
function Banners() {
  const images = [banner2, banner1, banner3, banner4];
  const zoomOutProperties = {
    duration: 2000,
    transitionDuration: 900,
    infinite: true,
    indicators: true,
    scale: 0.2,
    arrows: false,
  };

  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            className="banner"
            key={index}
            style={{ width: "100%", objectFit: "cover" }}
            src={each}
            alt="banner of site"
          />
        ))}
      </Zoom>
    </div>
  );
}

export default Banners;
