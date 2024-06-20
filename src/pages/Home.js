import React, { useState } from "react";
import GithubApi from "../api/GitHubApi";
import Search from "../components/Search/Search";
import Users from "../components/User/Users";

function Home() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (text) => {
    console.log(text);
    const data = await GithubApi.getUsers(text);
    setUsers(data);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div className="container">
      <Search clearUsers={clearUsers} handleSearch={handleSearch} />
      <Users users={users} />
    </div>
  );
}

export default Home;
