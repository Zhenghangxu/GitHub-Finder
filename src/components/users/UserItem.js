import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  // ES6 Destructuring
  const { login, avatar_url } = props.user;
  return (
    <div className="card shadow p-3 mb-5">
      <div className="card-body">
        <div className="badge">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "60px" }}
          />
          <h6>{login}</h6>
        </div>
        <Link to={`/user/${login}`} className="btn btn-light">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
