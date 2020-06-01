const fetchUser = async (type, string = null) => {
  let githubAccessTolken;

  if (process.env.NODE_ENV !== "production") {
    githubAccessTolken = process.env.REACT_APP_GITHUB_CLIENT_ACCESS_TOLKEN;
  } else {
    githubAccessTolken =
      process.env.REACT_APP_GITHUB_CLIENT_ACCESS_TOLKEN_DEPLOY;
  }
  // TODO Need to Fixed API Key deployment issue
  let request;
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `token ${githubAccessTolken}`,
    },
  };
  switch (type) {
    case "random":
      request = await fetch(`https://api.github.com/users?`, options);
      break;
    case "match":
      request = await fetch(
        `https://api.github.com/search/users?q=${string}`,
        options
      );
      break;
    case "single":
      request = await fetch(`https://api.github.com/users/${string}`, options);
      break;
    case "repos":
      request = await fetch(
        `https://api.github.com/users/${string}/repos?per_page=5&sort=created:asc`,
        options
      );
      break;
    default:
      break;
  }
  return request.json();
};

export default fetchUser;
