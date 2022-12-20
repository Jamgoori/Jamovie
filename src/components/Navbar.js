import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_wrapper">
        <Link to="/">
          <h1 className="logo">Jamovie</h1>
        </Link>
        <Link to="/">HOME</Link>
        <Link to="/movies">MOVIES</Link>
      </div>
    </div>
  );
};

export default Navbar;
