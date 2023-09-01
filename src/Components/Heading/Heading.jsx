import React from "react";
import "./Heading.css";

const Heading = ({ title }) => {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <button className="see-more-button">SEE MORE &gt;&gt;</button>
    </div>
  );
};

export default Heading;
