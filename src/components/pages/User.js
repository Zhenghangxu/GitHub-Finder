import React, { useContext, useEffect } from "react";
import { Spinner } from "../layout/spinner";
// import PropTypes from 'prop-types';
import GithubContext from "../../context/github/githubContext";
import UserBadge from "../layout/UserBadge";
import Bio from "../layout/Bio";
import Repos from "../layout/Repos";
import { Link } from "react-router-dom";

const User = ({ match }) => {
  // this will run on every update
  const { getUser, loading, user } = useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="container">
      <Link to="/" className="btn btn-secondary">
        <i className="fas fa-fw fa-arrow-left"></i>
        Back to Search
      </Link>
      <div className="user-detail">
        <UserBadge />
        <Bio />
        <Repos />
      </div>
    </div>
  );
};

export default User;
