import React, { useReducer } from "react";
import axios from "axios";
import GithubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  GET_USERS,
  SET_LOADING_USERS,
  SET_LOADING_USER,
} from "../types";

export const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

function GithubState({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text: string) => {
    try {
      setIsLoadingUsers();
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({
        type: SEARCH_USERS,
        payload: data.items,
      });
    } catch (error) {
      return;
    }
  };

  // Get User
  const getUser = async (username: string) => {
    try {
      setIsLoadingUser();
      const { data } = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      return;
    }
  };

  //Get Users

  //Get Repos
  const getUserRepos = async (username: string) => {
    try {
      setIsLoadingUser(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({
        type: GET_REPOS,
        payload: data,
      });
    } catch (error) {
      setIsLoadingUser(false);
      clearUsers();
      return;
    }
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set Loading
  const setIsLoadingUsers = (loading?: boolean) =>
    dispatch({
      type: SET_LOADING_USERS,
      payload: loading,
    });

  const setIsLoadingUser = (loading?: boolean) =>
    dispatch({
      type: SET_LOADING_USER,
      payload: loading,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loadingUsers: state.loadingUsers,
        loadingUser: state.loadingUser,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubState;
