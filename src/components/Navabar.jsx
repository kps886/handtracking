import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navabar = () => {
  return (
    <div className="nav-main">
      <Link to="/" className="logo">
        Hand Tracking <br /> Calculator
      </Link>
      <div className="container">
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
      </div>
    </div>
  );
};

export default Navabar;
