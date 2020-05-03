import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul className="navbar">
        <li className="navbar-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/movies" className="nav-link">
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
