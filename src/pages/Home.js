import axios from "axios";
import React, { useEffect, useState } from "react";
import Users from "../components/User/Users";

function Home() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get("https://api.github.com/users");
    console.log(response.data);
    setUsers(response.data);
  };

  const handleGetAll = async () => {
    console.log("Get All");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleGetAll}>Get All </button>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <Users users={users} />
    </div>
  );
}

export default Home;
