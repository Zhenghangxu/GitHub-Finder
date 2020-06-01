import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Bio = () => {
  const { user } = useContext(GithubContext);
  const { bio, followers, following, public_gists, public_repos } = user;

  return (
    <section className="card bio">
      <div className="bio">
        <h3>Bio</h3>
        <p className="">{bio !== null ? bio : "No Bio Information"}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Followers <span className="badge badge-secondary">{followers}</span>
        </li>
        <li className="list-group-item">
          Following <span className="badge badge-secondary">{following}</span>
        </li>
        <li className="list-group-item">
          Public Repositories{" "}
          <span className="badge badge-secondary">{public_repos}</span>
        </li>
        <li className="list-group-item">
          Public Gists{" "}
          <span className="badge badge-secondary">{public_gists}</span>
        </li>
      </ul>
    </section>
  );
};

export default Bio;
