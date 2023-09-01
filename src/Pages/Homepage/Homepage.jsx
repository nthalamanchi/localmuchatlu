import React from "react";
import "./Homepage.css";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";
import Heading from "../../Components/Heading/Heading";
import { Carouselslides } from "../../data";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeCarousel />
      <div className="latest-news">
        <Heading title={"LATEST NEWS"} />
        <div className="latest-news-list">
          {Carouselslides.map((slide, index) => (
            <div key={index} className="news-card">
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="card-image"
              />
              <h3 className="card-title">{slide.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="latest-news">
        <Heading title={"TRENDING NEWS"} />
        <div className="latest-news-list">
          {Carouselslides.map((slide, index) => (
            <div key={index} className="news-card">
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="card-image"
              />
              <h3 className="card-title">{slide.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="latest-news">
        <Heading title={"MOVIES"} />
        <div className="latest-news-list">
          {Carouselslides.map((slide, index) => (
            <div key={index} className="news-card">
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="card-image"
              />
              <h3 className="card-title">{slide.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="latest-news">
        <Heading title={"SPORTS"} />
        <div className="latest-news-list">
          {Carouselslides.map((slide, index) => (
            <div key={index} className="news-card">
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="card-image"
              />
              <h3 className="card-title">{slide.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="latest-news">
        <Heading title={"HEALTH"} />
        <div className="latest-news-list">
          {Carouselslides.map((slide, index) => (
            <div key={index} className="news-card">
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="card-image"
              />
              <h3 className="card-title">{slide.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="latest-news">
        <Heading title={"TECHNOLOGY"} />
        <div className="latest-news-list">
          {Carouselslides.map((slide, index) => (
            <div key={index} className="news-card">
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="card-image"
              />
              <h3 className="card-title">{slide.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="regional-news">
        <div className="state-news">
          <Heading title={"ANDHRA PRADESH"} />
          {Carouselslides.map((slide, index) => (
            <div key={index} className="state-news-list">
              <p> ⦿ {slide.title}</p>
            </div>
          ))}
        </div>
        <div className="district-news">
          <Heading title={"SPSR NELLORE DISTRICT"} />
          {Carouselslides.map((slide, index) => (
            <div key={index} className="district-news-list">
              <p> ⦿ {slide.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
