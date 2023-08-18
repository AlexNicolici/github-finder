import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  GET_USERS,
  SET_LOADING_USERS,
  SET_LOADING_USER,
} from "../types";

const state = (state: any, action: any) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loadingUsers: false,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loadingUser: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loadingUser: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loadingUsers: false,
      };
    case SET_LOADING_USERS:
      return {
        ...state,
        loadingUsers: action.payload ?? true,
      };
    case SET_LOADING_USER:
      return {
        ...state,
        loadingUser: action.payload ?? true,
      };
    default:
      return state;
  }
};

export default state;
