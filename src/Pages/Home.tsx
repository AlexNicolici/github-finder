import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Components/Users/Search";
import Users from "../Components/Users/Users";

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

  return (
    <div>
      <Search />
      <Users />
    </div>
  );
}

export default Home;
