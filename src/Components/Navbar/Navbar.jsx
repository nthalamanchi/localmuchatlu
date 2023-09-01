import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data";
import "./Navbar.css";
import DateTime from "../DateTime/DateTime";

const Navbar = () => {
  return (
    <nav className="lm-navbar">
      <div className="lm-navbar-logo">
        <h1>LOGO</h1>
      </div>
      <ul className="lm-navbar-lists">
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <DateTime />
    </nav>
  );
};

export default Navbar;
