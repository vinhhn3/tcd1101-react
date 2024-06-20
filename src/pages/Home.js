import React from "react";
import Search from "../components/Search/Search";
import Users from "../components/User/Users";

function Home() {
  return (
    <div className="container">
      <Search />
      <Users />
    </div>
  );
}

export default Home;
