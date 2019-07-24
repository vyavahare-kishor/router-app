import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">React Router</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar