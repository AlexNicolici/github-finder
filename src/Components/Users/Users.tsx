import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";

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

function Users() {
  const githubContext: any = useContext(GithubContext);

  const { isLoading, users } = githubContext;

  if (isLoading) {
    return <Spinner />;
  }

  // if (users.length === 0) {
  //   return (
  //     <div>
  //       <p
  //         style={{
  //           color: "red",
  //           display: "flex",
  //           justifyContent: "center",
  //           padding: 20,
  //         }}
  //       >
  //         List is empty, please enter something!
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="user-style">
      {users.map((user: any) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}

export default Users;
