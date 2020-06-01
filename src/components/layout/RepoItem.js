import React from "react";
import PropTypes from "prop-types";

const repoItem = ({ name, html_url, stargazers_count, forks_count }) => {
  return (
    <a
      href={html_url}
      className="repo-item list-group-item list-group-item-action"
    >
      <span>{name}</span>
      <div className="repoData">
        <span>
          <i className="fas fa-fw fa-star"></i>
          {stargazers_count}
        </span>
        <span>
          <i className="fas fa-fw fa-code-branch"></i>
          {forks_count}
        </span>
      </div>
    </a>
  );
};

repoItem.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  forks_count: PropTypes.number.isRequired,
};

export default repoItem;
