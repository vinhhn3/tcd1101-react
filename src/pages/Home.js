import React, { useState } from "react";
import { searchUsers } from "../api/GitHubApi";
import Search from "../components/Search/Search";
import Users from "../components/User/Users";

function Home() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (text) => {
    console.log(text);
    const data = await searchUsers(text);
    setUsers(data);
  };
  return (
    <div className="container">
      <Search handleSearch={handleSearch} />
      <Users users={users} />
    </div>
  );
}

export default Home;
