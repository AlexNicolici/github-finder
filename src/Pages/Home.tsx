import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Components/Users/Search";
import Users from "../Components/Users/Users";
import Alert from "../Components/layout/Alert";

function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        return;
      }
    };
    fetchUsers();
  }, []);

  const searchUsers = async (text: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(data.items);
      setIsLoading(false);
    } catch (error) {
      return;
    }
  };

  //Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setIsLoading(false);

    return;
  };

  return (
    <div>
      {users.length === 0 && (
        <Alert msg="Please enter something!" type="danger" />
      )}
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClear={users.length > 0 ? true : false}
      />
      <Users isLoading={isLoading} users={users} />
    </div>
  );
}

export default Home;
