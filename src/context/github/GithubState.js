import React, { useReducer } from "react";
import fetchUser from "../../functions/fetchUser";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { GET_USERS, GET_USER, SET_LOADING, GET_REPOS } from "../type";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  const getUsers = async (text) => {
    setLoading();
    const data = await fetchUser("match", text);
    dispatch({
      type: GET_USERS,
      payload: data.items,
    });
  };
  // Get sigle user
  const getUser = async (user) => {
    setLoading();
    const data = await fetchUser("single", user);
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };
  // Get User Repos
  const getUserRepos = async (user) => {
    const data = await fetchUser("repos", user);
    dispatch({
      type: GET_REPOS,
      payload: data,
    });
  };
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        getUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

// Get User

// passing in states that need to be available to the entire app

export default GithubState;
