import React from "react";
import PropTypes from "prop-types";

const NotFound = ({ msg }) => {
  return (
    <div className="container">
      <div className="NotFound card">
        <h2 className="text-muted">
          <i className="fas fa-fw fa-exclamation-circle"></i>
          {msg}
        </h2>
      </div>
    </div>
  );
};
NotFound.defaultProps = {
  msg: "Page Not Found",
};

NotFound.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default NotFound;
