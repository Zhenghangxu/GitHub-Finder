import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import EmpStatus from "./EmpStatus";

const UserBadge = () => {
  const { user } = useContext(GithubContext);
  const { avatar_url, login, location, hirable, html_url } = user;

  return (
    <section className="badge-large card">
      <img src={avatar_url} alt="Avatar" />
      <div className="name">
        <h3>{login}</h3>
        {hirable && <EmpStatus></EmpStatus>}
      </div>
      <p>
        <i className="fas fa-location-arrow"></i>
        {location === null ? "Location Unknown" : location}
      </p>
      <a href={html_url} className="btn btn-secondary">
        View Github Profile
      </a>
    </section>
  );
};

export default UserBadge;
