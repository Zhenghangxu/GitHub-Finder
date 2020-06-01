import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer style={footerStyle}></footer>;
};

const footerStyle = {
  backgroundColor: "#f4f4f4",
  display: "flex",
  height: "10vh",
  justifyContent: "space-around",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};
// Footer.propTypes = {

// }

export default Footer;
