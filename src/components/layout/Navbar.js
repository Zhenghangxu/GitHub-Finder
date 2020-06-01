import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  // set the props here
  return (
    <nav className="navbar bg-light navbar-light">
      <Link className="navbar-brand" to="/">
        <i className={"fa-fw " + icon}></i>
        {title}
      </Link>

      <div className="navbar-nav">
        <Link className="hori-btn btn btn-light" to="/">
          Home
        </Link>
        <Link className="hori-btn btn btn-light" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  // SearchUsers:PropTypes.func.isRequired,
};
export default Navbar;
