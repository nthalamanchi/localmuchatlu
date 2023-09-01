import React from "react";
import { Carouselslides } from "../../data";
import Carousel from "react-bootstrap/Carousel";
import "./HomeCarousel.css";


const HomeCarousel = () => {
  return (
    <div className="home-carousel">
        <Carousel data-bs-theme="dark">
          {Carouselslides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img src={slide.imageSrc} alt={`Slide ${index}`} />
              <Carousel.Caption>
                <h1>{slide.title}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
  );
};

export default HomeCarousel;
