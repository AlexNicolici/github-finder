import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

interface UsersProps {
  id: string;
  name: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  login: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
}

function Users({
  isLoading,
  users = [],
}: {
  isLoading?: boolean;
  users?: UsersProps[];
}) {
  if (isLoading) {
    return <Spinner />;
  }

  if (users.length === 0) {
    return (
      <div>
        <p style={{ display: "flex", justifyContent: "center", padding: 50 }}>
          List is empty!
        </p>
      </div>
    );
  }

  return (
    <div className="user-style">
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}

export default Users;
