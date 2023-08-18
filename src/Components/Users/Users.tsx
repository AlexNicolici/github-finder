import React, { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/GithubContext";

function Users() {
  const { isLoading, users, fetchUsers }: any = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (users.length === 0) {
    return (
      <div>
        <p
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            padding: 20,
          }}
        >
          List is empty, please enter something!
        </p>
      </div>
    );
  }

  return (
    <div className="user-style">
      {users.map((user: any) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
}

export default Users;
