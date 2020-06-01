import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/github/githubContext";
import RepoItem from "./RepoItem";

const Repos = () => {
  const { getUserRepos, repos, user } = useContext(GithubContext);

  useEffect(() => {
    getUserRepos(user.login);
  }, []);

  if (repos.length === 0) {
    return (
      <div className="card repos-empty">
        <h5 className="text-muted">This user does not have any public repos</h5>
      </div>
    );
  } else {
    return (
      <div className="card repos">
        <h3>Recent Repositories</h3>
        {repos.map((repo) => (
          <RepoItem
            key={repo.id}
            name={repo.name}
            html_url={repo.html_url}
            stargazers_count={repo.stargazers_count}
            forks_count={repo.forks_count}
          ></RepoItem>
        ))}
      </div>
    );
  }
};

export default Repos;
