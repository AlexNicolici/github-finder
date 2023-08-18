import React, { useEffect, Fragment, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/layout/Spinner";
import Repos from "../Components/repos/Repos";
import GithubContext from "../context/github/GithubContext";

function User() {
  const params = useParams();

  const username = params.login;

  const { getUser, user, repos, loadingUser, getUserRepos }: any =
    useContext(GithubContext);

  // GET USER REPOS

  useEffect(() => {
    if (username) {
      getUser(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  useEffect(() => {
    if (username) {
      getUserRepos(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  if (loadingUser) {
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

      <Repos repos={repos} />
    </div>
  );
}

export default User;
