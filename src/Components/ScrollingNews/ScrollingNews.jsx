import React from 'react'
import  FastMarquee  from 'react-fast-marquee';
import "./ScrollingNews.css"

const ScrollingNews = ({ headlines }) => {
    return (
      <FastMarquee>
        {headlines.map((headline, index) => (
          <span key={index}>{headline}</span>
        ))}
      </FastMarquee>
    );
  };
  
  export default ScrollingNews;
