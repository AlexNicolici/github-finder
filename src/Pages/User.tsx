import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/layout/Spinner";
import Repos from "../Components/repos/Repos";

function User() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userRepos, setUserRepos] = useState(null);

  const params = useParams();

  const username = params.login;

  //Get single Github user
  const getUser = async (username: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setUser(null);
      return;
    }
  };

  // GET USER REPOS
  const getUserRepos = async (username: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUserRepos(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setUser(null);
      return;
    }
  };

  useEffect(() => {
    if (username) {
      getUser(username);
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      getUserRepos(username);
    }
  }, [username]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!user) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        User not found!
      </h1>
    );
  }

  const {
    login,
    avatar_url,
    hireable,
    location,
    bio,
    html_url,
    company,
    blog,
    followers,
    following,
    public_gists,
    public_repos,
  } = user;

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Link to="/" className="btn btn-light">
          <i className="fa fa-arrow-circle-left"></i> Back to search
        </Link>
        <p>
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success"></i>
          ) : (
            <i className="fas fa-times-circle text-danger"></i>
          )}
        </p>
      </div>

      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={login}
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{login}</h1>
          {location ? (
            <p>Location: {location}</p>
          ) : (
            <p>This user has no location on profile!</p>
          )}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}

          <Link to={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </Link>

          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">
          <p>Followers: {followers}</p>
        </div>
        <div className="badge badge-success">
          <p>Following: {following}</p>
        </div>
        <div className="badge badge-light">
          <p>Public Repos: {public_repos}</p>
        </div>
        <div className="badge badge-dark">
          <p>Public Gists: {public_gists}</p>
        </div>
      </div>

      <Repos repos={userRepos} />
    </div>
  );
}

export default User;
