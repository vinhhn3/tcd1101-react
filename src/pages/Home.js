import axios from "axios";
import React, { useState } from "react";
import Search from "../components/Search/Search";
import Users from "../components/User/Users";

function Home() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (text) => {
    console.log(text);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsers(response.data.items);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Search handleSearch={handleSearch} />
      <Users users={users} />
    </div>
  );
}

export default Home;
