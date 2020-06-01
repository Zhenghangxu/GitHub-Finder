import React, { useContext } from "react";
import UserItem from "./UserItem";
// import PropTypes from "prop-types";
import { Spinner } from "../layout/spinner";
import NotFound from "../layout/NotFound";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner></Spinner>;
  } else if (users.length === 0) {
    return <NotFound msg="No User Found"></NotFound>;
  } else {
    return (
      <div className="user-grid">
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};

// style

export default Users;
