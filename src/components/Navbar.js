import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_wrapper">
        <Link to="/">
          <span>Jamovie</span>
          <div className="nav_logo"></div>
        </Link>
        <Link to="/">HOME</Link>
        <Link to="/movies">MOVIES</Link>
      </div>
    </div>
  );
};

export default Navbar;
