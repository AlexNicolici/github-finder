import React from "react";
import { Link } from "react-router-dom";

function UserItem({
  user,
}: {
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}) {
  const { login, avatar_url } = user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="avatar"
        className="round-img"
        style={{ width: "60px" }}
      />

      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
