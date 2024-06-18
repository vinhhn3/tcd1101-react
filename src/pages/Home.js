import React, { useEffect, useState } from "react";
import { getUsers } from "../api/GitHubApi";
import Users from "../components/User/Users";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const data = await getUsers();
    console.log(data);
    setUsers(data);
  };

  const handleGetAll = async () => {
    console.log("Get All");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleGetAll}>Get All </button>
      <Users users={users} />
    </div>
  );
}

export default Home;
